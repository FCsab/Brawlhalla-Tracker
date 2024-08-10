const main = document.getElementById('main');
const header = document.getElementById('header');

header.innerText = "Brawlhalla Tracker";
header.style.color = "Black";
header.style.fontSize = "50px";
header.style.textAlign = "center";

let input_area = document.createElement('div');

let playerid = document.createElement('input');
playerid.placeholder = "Enter your player id";
let button = document.createElement('button');
button.innerText = "Search";

input_area.appendChild(playerid);
input_area.appendChild(button);

input_area.style.textAlign = "center";
input_area.style.marginTop = "50px";

button.addEventListener('click', function() {
    input_area.style.display = 'none';
    let player_id = playerid.value;
    fetch('https://brawlhalla.fly.dev/v1/ranked/id?brawlhalla_id=' + player_id)
        .then(response => response.json())
        .then(data => {
            let player = data.data;
            let namee = player.name;
            let rating = player.rating;
            let peak_rating = player.peak_rating;
            let tier = player.tier;
            let wins = player.wins;
            let games = player.games;
            let losses = games - wins;
            let win_rate = (wins / games) * 100;
            let region = player.region;
            let last_updated = player.lastSynced;

            let global_rank = player.global_rank != 0 ? player.global_rank : "Not Ranked";
            let region_rank = player.region_rank != 0 ? player.region_rank : "Not Ranked";

            let player_info = document.createElement('div');
            player_info.style.textAlign = "center";
            player_info.style.marginTop = "50px";
            player_info.style.fontSize = "20px";
            player_info.style.color = "Black";

            let lastUpdatedDate = new Date(last_updated);
            let formattedDate = `${lastUpdatedDate.getFullYear()}. ${String(lastUpdatedDate.getMonth() + 1).padStart(2, '0')}. ${String(lastUpdatedDate.getDate()).padStart(2, '0')}. ${String(lastUpdatedDate.getHours()).padStart(2, '0')}. ${String(lastUpdatedDate.getMinutes()).padStart(2, '0')}. ${String(lastUpdatedDate.getSeconds()).padStart(2, '0')}.`;

            player_info.innerHTML = `
                <p>Name: ${namee}</p>
                <p>Rating: ${rating}</p>
                <p>Peak Rating: ${peak_rating}</p>
                <p>Rank: ${tier}</p>
                <p>Wins: ${wins}</p>
                <p>Losses: ${losses}</p>
                <p>Win Rate: ${win_rate.toFixed(2)}%</p>
                <p>Region: ${region}</p>
                <p>Last Updated: ${formattedDate}</p>
            `;

            main.appendChild(player_info);
        })
        .catch(error => {
            console.error('Error:', error);
            player_info.innerHTML = `
                <p>Player not found</p>
            `;
        });
});

main.appendChild(input_area);