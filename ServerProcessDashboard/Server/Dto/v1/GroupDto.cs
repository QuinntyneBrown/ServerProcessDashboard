﻿using ServerProcessDashboard.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Dto.v1
{
    public class GroupDto
    {
        public GroupDto()
        {
            
        }

        public GroupDto(Group group)
        {
            this.Id = group.Id;
            this.Name = group.Name;
        }

        public int Id { get; set; }

        public string Name { get; set; }
    }
}