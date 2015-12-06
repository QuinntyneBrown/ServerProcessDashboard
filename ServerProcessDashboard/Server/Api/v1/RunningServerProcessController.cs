using Microsoft.AspNet.SignalR;
using ServerProcessDashboard.Server.Data;
using ServerProcessDashboard.Server.Hubs;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class RunningServerProcessController : BaseApiController
    {
        public RunningServerProcessController(ISessionService sessionService, IServerProcessService serverProcessService)
            :base(sessionService)
        {
            this.serverProcessService = serverProcessService;
        }

        [System.Web.Http.Authorize]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(this.serverProcessService.GetAllRunningServerProcesses());
        }

        [System.Web.Http.Authorize]
        [HttpGet]
        public IHttpActionResult GetByGuid(Guid guid)
        {            
            return Ok(this.serverProcessService.GetByGuid(guid));
        }

        [HttpGet]
        public IHttpActionResult Kill(Guid guid)
        {
            this.serverProcessService.KillRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Pause(Guid guid)
        {
            this.serverProcessService.PauseRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Update(string serverProcessName, Guid guid, ExecutionState executionState)
        {
            var response = serverProcessService.UpdateServerProcessLog(serverProcessName, guid, executionState);
            var context = GlobalHost.ConnectionManager.GetHubContext<ServerProcessDashboardHub>();
            context.Clients.All.runningServerProcessUpdate(response);            
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Complete(Guid guid)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<ServerProcessDashboardHub>();

            context.Clients.All.runningServerProcessComplete(guid);

            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Stop(Guid guid)
        {
            this.serverProcessService.StopRunningServerProcess(guid);
            return Ok();
        }

        [HttpGet]
        public IHttpActionResult Restart(Guid guid)
        {
            this.serverProcessService.RestartRunningServerProcess(guid);
            return Ok();
        }

        private IServerProcessService serverProcessService { get; set; }
    }
}
