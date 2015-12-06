using ServerProcessDashboard.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Dto.v1
{
    public class ServerProcessDto
    {
        public ServerProcessDto(ServerProcess serverProcess)
        {
            this.id = serverProcess.Id;
            this.name = serverProcess.Name;
        }
        public int id { get; set; }
        public string name { get; set; }
 
    }
}