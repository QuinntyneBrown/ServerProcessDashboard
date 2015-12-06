using System.Web.Caching;
using Microsoft.AspNet.SignalR;
using ServerProcessDashboard.Server.Data;
using ServerProcessDashboard.Server.Dto.v1;
using ServerProcessDashboard.Server.Hubs;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class ServerProcessController : BaseApiController
    {
        public ServerProcessController(ISessionService sessionService, IServerProcessService serverProcessService)
            : base(sessionService)
        {
            this.serverProcessService = serverProcessService;
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(this.serverProcessService.GetAllServerProcesses());
        }

        [System.Web.Http.Authorize]
        [HttpPost]
        public IHttpActionResult Add(ServerProcess serverProcess)
        {
            serverProcessService.AddServerProcess(serverProcess);

            return Ok();
        }

        [System.Web.Http.Authorize]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
        {
            serverProcessService.RemoveServerProcess(id);
            return Ok();
        }

        [System.Web.Http.Authorize]
        [HttpPost]
        public IHttpActionResult Run(ServerProcessRunRequestDto serverProcessRunRequestDto)
        {
            return Ok(serverProcessService.RunServerProcess(serverProcessRunRequestDto));
        }

        private IServerProcessService serverProcessService { get; set; }


    }
}
