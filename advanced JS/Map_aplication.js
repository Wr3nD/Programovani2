//1
const onlineStatus = [div.online-status.open, div.online-status.open, div.online-status.open, div.online-status.open, div.online-status.open];
const onlineStatusContent = document.getElementsByClassName("online-status-content");
 
$.get("./components/query-main.php", function (data) {
  const dataJson = JSON.parse(data);
 
  const restaurantInfo = dataJson.data.companyBranch;
  // console.log(restaurantInfo);
 
  for (let i = 0; i < onlineStatus.length; i++) {
    if (restaurantInfo.isOpen) {
      onlineStatus[i].classList.add("open");
      onlineStatusContent[i].innerHTML = "Právě máme otevřeno";
    } else {
      onlineStatus[i].classList.add("closed");
      onlineStatusContent[i].innerHTML =
        "<i class='fas fa-store-alt-slash'></i> Právě máme zavřeno";
    }
  }
});
 
function addOpen(arr1, arr2) {
  return (
    arr1.map((addon1) => addon1.classList.add("open")) &&
    arr2.map((addon2) => (addon2.innerHTML = "Právě máme otevřeno"))
  );
}
//2
const branchQuery = `./queries/companyBranch.php`
const closedIcon = `<i class='fas fa-store-alt-slash'></i>`

const onlineStatusElements = document.querySelectorAll(`.online-status`)
const onlineStatusContentElements = document.querySelectorAll(`.online-status-content`)

$.get(branchQuery, (queryResult) => {
  const { data, error } = JSON.parse(queryResult)

  if (error || !data) {
    // TODO
    return
  }

  const { isOpen } = data.companyBranch

  const onlineStatusClass = isOpen ? `open` : `closed`
  const onlineStatusLabel = isOpen ? `Právě máme otevřeno` : `${closedIcon} Právě máme zavřeno`

  onlineStatusElements.forEach(element => element.classList.add(onlineStatusClass))
  onlineStatusContentElements.forEach(element => element.innerHTML = onlineStatusLabel)
})