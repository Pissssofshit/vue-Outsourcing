const BASEURL = "http://rap2api.taobao.org/app/mock/6507"
const GET = "/GET/api/";
const POST = "/POST/api/";
const PUT = "/PUT/api/";
const DELETE = "/DELETE/api/";

const PROJECTMOUDLE = "project/";
const USERMOUDLE = "user/";


const URL_LOGIN = BASEURL + GET + USERMOUDLE + "login";

const URL_MANAGEPROJECTLIST = BASEURL + GET + PROJECTMOUDLE + "manageProjectList";

const URL_JOINPROJECTLIST = BASEURL + GET + PROJECTMOUDLE + "joinProjectList";

const URL_STAFF = BASEURL + GET + PROJECTMOUDLE + "staff";

const URL_ADDNEWSTAFF=BASEURL+POST+PROJECTMOUDLE+"staff";
export default {
  URL_LOGIN,
  URL_MANAGEPROJECTLIST,
  URL_JOINPROJECTLIST,
  URL_STAFF
}
