
window.onbeforeunload = function(){
  window.scrollTo(0,0);
}

//Search by filter
function searchBook() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("bookTable");
  tr = table.getElementsByTagName("tr");
  if(document.getElementById("check-title").checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  else if(document.getElementById("check-author").checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  else if(document.getElementById("check-subject").checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  else if(document.getElementById("check-publishdate").checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}

//Infinity Scroll

const div = document.querySelector("#Book-list");

const table = document.getElementsByTagName("tbody")[0];

const title = [
  "The Cell","World Benieth","War of Lanka","Rich Dad Poor Dad","Do It Today","The Monk Who Sold Is Ferari","HarryPotter and The Philosopher Stone","How to stop worrying","Reflections","The GITA",
  "50 Greatest stories","Art of War","Girl To Remember","Chanikya","A piece of Heaven","Great Train Journey"

];

const author = [
  "M. coper","Ched Smith","Amish Tripati","Roberty Eosaki","Derux Forux","Robin Sharma","A.K. Ravalith","Daily karneji","Swami Vivekananda","Ananth Payi","Teriyo O' brian","Tun chu","Ajay K Pandey",
  "Egya Sharma","Shivani Singh","Ruskin Bond"
];

const subject = [
  "Biology","Social","Social","Education","Health","Social","Fictional","Social","Motivation","Social","Social","Religious","Relations","Novel","Fictional","Fictional"
];

const publishBook = [
  "Jan 1,2019","Sep 19, 2019","Oct 3,2022","April 11,2017","June 21,2018","April 20,2022","Jan 3,2017","Apr 25,2019","June 9,2011","Jan 1,1997","Oct 10, 2015","Feb 4,2013","Sep 28, 2018","Aug 1, 2008","Mar 4, 2009","Jul 27, 2019"
];

const loadMore = () => {
  for(let i=0; i<16;i++) {
   let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = 11+i + "."
    row.insertCell(1).innerHTML = title[i];
    row.insertCell(2).innerHTML = author[i];
    row.insertCell(3).innerHTML = subject[i];
    row.insertCell(4).innerHTML = publishBook[i];
  }
  i = i+1;
};

div.addEventListener("scroll", () => {
  if (div.scrollTop + div.clientHeight >= div.scrollHeight) loadMore();
});

loadMore();
