using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services
{
    public class ProcessService: IProcessService
    {
        public Process Start(string host, string guid)
        {
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.FileName = @"C:\Projects\ServerProcessDashboard\ServerProcessDashboard.Client\bin\Debug\ServerProcessDashboard.Client.exe";
            //startInfo.Arguments = host;
            //startInfo.Arguments = string.Format("{0} {1}",host,guid);
            return Process.Start(startInfo);

        }
    }
}