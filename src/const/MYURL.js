const BASEURL = "http://rap2api.taobao.org/app/mock/6507"
const GET = "/GET/api/";
const POST = "/POST/api/";
const PUT = "/PUT/api/";
const DELETE = "/DELETE/api/";

const PROJECTMOUDLE = "project/";
const USERMOUDLE = "user/";
const URL_LOGIN = BASEURL + POST + USERMOUDLE + "login";

const URL_MANAGEPROJECTLIST = BASEURL + POST +PROJECTMOUDLE+ "manageProjectList";

const URL_JOINPROJECTLIST = BASEURL + POST + PROJECTMOUDLE + "joinProjectList";


export default  {
  URL_LOGIN,
  URL_MANAGEPROJECTLIST,
  URL_JOINPROJECTLIST
}
