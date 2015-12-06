using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Dto.v1;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface IServerProcessService
    {
        RunningServerProcessDto UpdateServerProcessLog(string serverProcessName, Guid guid, ExecutionState executionState);

        void AddServerProcess(ServerProcess serverProcess);

        ICollection<ServerProcess> GetAllServerProcesses();

        ICollection<RunningServerProcessDto> GetAllRunningServerProcesses();

        ServerProcess MostRecentlyAddedServerProcess();

        RunningServerProcess MostRecentlyAddedRunningServerProcess();

        RunningServerProcessDto GetByGuid(Guid guid);

        void RemoveServerProcess(int serverProcessId);

        RunningServerProcessDto RunServerProcess(ServerProcessRunRequestDto serverProcessRunRequestDto);

        RunningServerProcessDto KillRunningServerProcess(Guid guid);

        RunningServerProcessDto StopRunningServerProcess(Guid guid);

        RunningServerProcessDto PauseRunningServerProcess(Guid guid);

        RunningServerProcessDto RestartRunningServerProcess(Guid guid);
    }
}
