using System.Data.Entity;
using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Dto.v1;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using ServerProcessDashboard.Server.Hubs;

namespace ServerProcessDashboard.Server.Services
{
    public class ServerProcessService : IServerProcessService
    {
        private IUow uow { get; set; }

        protected IProcessService processService { get; set; }

        public ServerProcessService(IUow uow, IProcessService processService)
        {
            this.uow = uow;
            this.processService = processService;
        }

        public void AddServerProcess(ServerProcess serverProcess)
        {
            uow.ServerProcesses.Add(serverProcess);
            uow.SaveChanges();
        }

        public ICollection<ServerProcess> GetAllServerProcesses()
        {
            return uow.ServerProcesses.GetAll().Where(x => !x.IsDeleted).ToList();
        }

        public ICollection<RunningServerProcessDto> GetAllRunningServerProcesses()
        {
            var dtos = new List<RunningServerProcessDto>();

            foreach (var rsp in uow.RunningServerProcesses.GetAll().Include(x => x.ServerProcess).Where(x => !x.IsDeleted))
            {
                dtos.Add(new RunningServerProcessDto(rsp));
            }

            return dtos;
        }

        public ServerProcess MostRecentlyAddedServerProcess()
        {
            return uow.ServerProcesses.GetAll().Where(x=> !x.IsDeleted).OrderByDescending(x => x.Id).FirstOrDefault();
        }

        public RunningServerProcess MostRecentlyAddedRunningServerProcess()
        {
            return uow.RunningServerProcesses.GetAll().Where(x => !x.IsDeleted).OrderByDescending(x => x.Id).FirstOrDefault();
        }

        public void RemoveServerProcess(int serverProcessId)
        {
            var serverProcess = uow.ServerProcesses.GetById(serverProcessId);
            serverProcess.IsDeleted = true;
            uow.ServerProcesses.Update(serverProcess);
            uow.SaveChanges();

        }

        public RunningServerProcessDto UpdateServerProcessLog(string serverProcessName, Guid guid, ExecutionState executionState)
        {
            RunningServerProcess rsp = new RunningServerProcess();

            var context = GlobalHost.ConnectionManager.GetHubContext<ServerProcessDashboardHub>();

            if (executionState == ExecutionState.Created)
            {
                var serverProcess = uow.ServerProcesses.GetAll().Single(x => x.Name == serverProcessName);
                rsp.Guid = guid;
                rsp.ExecutionState = executionState;
                rsp.ServerProcess = serverProcess;    
                uow.RunningServerProcesses.Add(rsp);
            }
            else
            {
                rsp = uow.RunningServerProcesses.GetAll().Include(x=>x.ServerProcess).Single(x => x.Guid == guid);
                rsp.ExecutionState = executionState;
            }

            uow.SaveChanges();

            return new RunningServerProcessDto(rsp);            
        }

        public RunningServerProcessDto RunServerProcess(ServerProcessRunRequestDto serverProcessRunRequestDto)
        {
            //var runningServerProcess = new RunningServerProcess();

            //runningServerProcess.Guid = Guid.NewGuid();

            //runningServerProcess.ExecutionState = ExecutionState.Created;

            //runningServerProcess.ServerProcess =
            //    uow.ServerProcesses.GetAll().Single(x => x.Name == serverProcessRunRequestDto.ServerProcessName);

            //var context = GlobalHost.ConnectionManager.GetHubContext<ServerProcessDashboardHub>();

            this.processService.Start(null,null);

            //uow.RunningServerProcesses.Add(runningServerProcess);

            //uow.SaveChanges();

            //var result = new RunningServerProcessDto(runningServerProcess);

            //context.Clients.All.runningServerProcessStart(result);

            //return result;

            return null;
        }

        public RunningServerProcessDto KillRunningServerProcess(Guid guid)
        {
            throw new NotImplementedException();
        }

        public RunningServerProcessDto StopRunningServerProcess(Guid guid)
        {
            throw new NotImplementedException();
        }

        public RunningServerProcessDto PauseRunningServerProcess(Guid guid)
        {
            throw new NotImplementedException();
        }

        public RunningServerProcessDto RestartRunningServerProcess(Guid guid)
        {
            throw new NotImplementedException();
        }

        public void UpdateRunningServerProcess(RunningServerProcess runningServerProcess)
        {
            throw new NotImplementedException();
        }

        public RunningServerProcessDto CompleteRunningServerProcess(Guid guid)
        {
            var rsp = uow.RunningServerProcesses.GetAll().Include(x=>x.ServerProcess).Single(x => x.Guid == guid);

            rsp.ExecutionState = ExecutionState.Completed;

            uow.SaveChanges();

            return new RunningServerProcessDto(rsp);

        }


        public RunningServerProcessDto GetByGuid(Guid guid)
        {
            return new RunningServerProcessDto(uow.RunningServerProcesses
                .GetAll()
                .Include(x=>x.ServerProcess)
                .Single(x => x.Guid == guid));

        }
    }
}