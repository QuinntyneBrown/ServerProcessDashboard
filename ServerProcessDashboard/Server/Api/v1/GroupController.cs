﻿using ServerProcessDashboard.Server.Data.Contracts;
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
    public class GroupController : BaseApiController
    {
        public GroupController(ISessionService sessionService, IUow uow)
            : base(sessionService)
        {
            this.uow = uow;
            this.repository = uow.Groups;
        }

        [HttpPost]
        [Authorize]
        public IHttpActionResult Add(Group entity)
        {
            this.repository.Add(entity);
            this.uow.SaveChanges();
            return Ok(entity);
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(repository.GetAll().Where(x => !x.IsDeleted));
        }

        [HttpDelete]
        [Authorize]
        public IHttpActionResult Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            repository.Update(entity);
            uow.SaveChanges();
            return Ok();
        }

        protected readonly IRepository<Group> repository;

        protected readonly IUow uow;
    }
}
