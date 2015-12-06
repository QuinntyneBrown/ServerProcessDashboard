using ServerProcessDashboard.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Dto.v1
{
    public class RunningServerProcessDto
    {
        public RunningServerProcessDto(RunningServerProcess runningServerProcess)
        {
            this.guid = runningServerProcess.Guid;
            this.executionState = runningServerProcess.ExecutionState;
            this.serverProcessDto = new ServerProcessDto(runningServerProcess.ServerProcess);
        }
        public Guid guid { get; set; }

        public ExecutionState executionState { get; set; }

        public ServerProcessDto serverProcessDto { get; set; }
    }
}