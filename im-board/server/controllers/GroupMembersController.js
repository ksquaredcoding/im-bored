import { Auth0Provider } from "@bcwdev/auth0provider";
import { groupMembersService } from "../services/GroupMembersService.js";
import BaseController from "../utils/BaseController.js";

export class GroupMembersController extends BaseController {
  constructor() {
    super("/api/groupmembers");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:groupId", this.getGroupMembersByGroupId)
      .post("", this.addGroupMember)
      .delete("/:groupMemberId", this.kickMember);
  }
  async getGroupMembersByGroupId(req, res, next) {
    try {
      const groupMember = await groupMembersService.getGroupMembersByGroupId(
        req.params.groupId
      );
      res.send(groupMember);
    } catch (error) {
      next(error);
    }
  }
  async addGroupMember(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id;
      const groupMember = await groupMembersService.addGroupMember(req.body);
      res.send(groupMember);
    } catch (error) {
      next(error);
    }
  }
  async kickMember(req, res, next) {
    try {
      const groupMember = await groupMembersService.kickMember(
        req.params.groupMemberId,
        req.userInfo.id,
        req.body
      );
      res.send(groupMember);
    } catch (error) {
      next(error);
    }
  }
}