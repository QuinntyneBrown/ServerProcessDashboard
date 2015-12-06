using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface IProcessService
    {
        Process Start(string host, string guid);
    }
}