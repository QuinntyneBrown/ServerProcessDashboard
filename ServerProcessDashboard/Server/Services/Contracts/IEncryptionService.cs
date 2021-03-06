﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface IEncryptionService
    {
        string TransformPassword(string password);
        string EncryptString(string plainText);
        string DecryptString(string cipherText);
        string EncryptUri(string plainText);
    }
}