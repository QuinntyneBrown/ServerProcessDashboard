using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Timer = System.Timers.Timer;

namespace ServerProcessDashboard.Client
{
    class Program
    {

        public static void Main(string[] arguments)
        {
            string host;

            if (arguments.Length > 0)
            {
                host = arguments[0];
            }
            else
            {
                host = @"http://localhost:63813/api/runningServerprocess/";
            }

            var guid = Guid.NewGuid().ToString();
            var serverProcessName = "SIM";

            var start = new HttpClient().GetStringAsync(string.Format(@"{0}update?guid={1}&executionState=0&serverProcessName={2}", host, guid, serverProcessName)).Result;

            for (var i = 0; i < 5; i++)
            {
                Thread.Sleep(500);

                var s = new HttpClient().GetStringAsync(string.Format(@"{0}update?guid={1}&executionState=1&serverProcessName={2}", host, guid, serverProcessName)).Result;
            }

            var r = new HttpClient().GetStringAsync(string.Format(@"{0}update?guid={1}&executionState=5&serverProcessName={2}", host, guid, serverProcessName)).Result;

        }


    }
}
