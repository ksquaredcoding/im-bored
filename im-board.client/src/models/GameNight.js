export class GameNight {


  constructor(data) {
this.id=data.id
this.groupId=data.groupId
this.gameId=data.gameId
this.groupMemberIds=data.groupMemberIds
this.location=data.location
this.startDate=data.startDate //TODO do a new Date(data.startDate).tolocaldatestring('en-US')

  }

}