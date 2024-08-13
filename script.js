const main = document.getElementById('main');
const header = document.getElementById('header');

header.innerText = "Brawlhalla Tracker";
header.style.color = "Black";
header.style.fontSize = "50px";
header.style.textAlign = "center";

document.title = "Brawlhalla Tracker";

let input_area = document.createElement('div');
input_area.style.textAlign = "center";
input_area.style.marginTop = "50px";

let playerid = document.createElement('input');
playerid.placeholder = "Enter your player id";
let playerid_help = document.createElement('div');
playerid_help.innerHTML="<a href='playerid.png'>Where is my player id?</a>";

let button = document.createElement('button');
button.innerText = "Search";


input_area.appendChild(playerid);
input_area.appendChild(button);
input_area.appendChild(playerid_help);
main.appendChild(input_area);


let legends = {
    bodvar: "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
    cassidy: "https://cms.brawlhalla.com/c/uploads/2021/07/cassidy.png",
    orion: "https://cms.brawlhalla.com/c/uploads/2021/07/orion.png",
    lordvraxx: "https://cms.brawlhalla.com/c/uploads/2021/07/vraxx.png",
    gnash: "https://cms.brawlhalla.com/c/uploads/2021/07/gnash.png",
    queen_nai: "https://cms.brawlhalla.com/c/uploads/2021/07/nai.png",
    hattori: "https://cms.brawlhalla.com/c/uploads/2021/07/hattori.png",
    sir_roland: "https://cms.brawlhalla.com/c/uploads/2021/07/roland.png",
    scarlet: "https://cms.brawlhalla.com/c/uploads/2021/07/scarlet.png",
    thatch: "https://cms.brawlhalla.com/c/uploads/2021/07/thatch.png",
    ada: "https://cms.brawlhalla.com/c/uploads/2021/07/ada.png",
    sentinel: "https://cms.brawlhalla.com/c/uploads/2021/07/sentinel.png",
    lucien: "https://cms.brawlhalla.com/c/uploads/2021/07/lucien.png",
    teros: "https://cms.brawlhalla.com/c/uploads/2021/07/teros.png",
    brynn: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValkyrieM.png",
    asuri: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CatM.png",
    barraza: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ApocM.png",
    ember: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfM.png",
    azoth: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AzothM.png",
    koji: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SamuraiM.png",
    ulgrim: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DwarfM.png",
    diana: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonsterHunterM.png",
    jhala: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbarianM.png",
    kor: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GolemM.png",
    wu_shang: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonkM.png",
    val: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValM.png",
    ragnir: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DragonM.png",
    cross: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CrossM.png",
    mirage: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AssassinM.png",
    nix: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ReaperM.png",
    mordex: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WerewolfM.png",
    yumiko: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KitsuneM.png",
    artemis: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpaceHunterM.png",
    caspian: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThiefM.png",
    sidra: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CorsairM.png",
    xull: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BruteM.png",
    kaya: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_InuitM-1.png",
    isiah: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SoldierM.png",
    jiro: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ShinobiM.png",
    lin_fei: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WuxiaM.png",
    zariel: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CelestialM.png",
    rayman: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaymanM.png",
    dusk: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfwarM.png",
    fait: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpellwitchM.png",
    thor: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThorM.png",
    petra: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RagefighterM.png",
    vector: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualRobotM.png",
    volkov: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VampLordM.png",
    onyx: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GargoyleM.png",
    jaeyun: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SellswordM.png",
    mako: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualSharkM.png",
    magyar: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GhostArmorM.png",
    reno: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BountyHunterM.png",
    munin: "https://cms.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_BirdBardM.png",
    arcadia: "https://cms.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_FairyQueenM.png",
    ezio: "https://cms.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EzioM.png",
    tezca: "https://cms.brawlhalla.com/c/uploads/2022/12/a_Roster_Pose_LuchadorM.png",
    thea: "https://cms.brawlhalla.com/c/uploads/2023/03/a_Roster_Pose_SpeedsterM.png",
    red_raptor: "https://cms.brawlhalla.com/c/uploads/2023/06/a_Roster_Pose_SentaiM.png",
    loki: "https://cms.brawlhalla.com/c/uploads/2023/09/Loki_icon-1.png",
    seven: "https://cms.brawlhalla.com/c/uploads/2023/12/roboengineer-rostericon.png",
    vivi: "https://cms.brawlhalla.com/c/uploads/2024/08/a_Roster_Pose_ViviL.png",
    imugi: "https://cms.brawlhalla.com/c/uploads/2024/07/imgui-icon.png"
};

button.addEventListener('click', function() {
    main.innerHTML = "";
    main.appendChild(input_area);

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

            let twos = player['2v2'];
            let sortedTwos = twos.sort((a, b) => b.rating - a.rating);
            let topThreeTwos = sortedTwos.slice(0, 3);

            let all_legends = player.legends;
            let sortedLegends = all_legends.sort((a, b) => b.peak_rating - a.peak_rating);
            let legendName = sortedLegends[0].legend_name_key;
            let legendImage = legends[legendName];

            document.title = `${namee} - Brawlhalla Tracker`;

            let player_info = document.createElement('div');
            player_info.style.textAlign = "center";
            player_info.style.marginTop = "50px";
            player_info.style.fontSize = "20px";
            player_info.style.color = "Black";

            let lastUpdatedDate = new Date(last_updated);
            let formattedDate = `${lastUpdatedDate.getFullYear()}. ${String(lastUpdatedDate.getMonth() + 1).padStart(2, '0')}. ${String(lastUpdatedDate.getDate()).padStart(2, '0')}. ${String(lastUpdatedDate.getHours()).padStart(2, '0')}. ${String(lastUpdatedDate.getMinutes()).padStart(2, '0')}. ${String(lastUpdatedDate.getSeconds()).padStart(2, '0')}.`;

            player_info.innerHTML = `
                <img src="${legendImage}" style="display: block; margin: 0 auto; width: 200px; height: 200px;">
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

            let twos_div = document.createElement('div');
            twos_div.style.display = "flex";
            twos_div.style.justifyContent = "center";
            twos_div.style.marginTop = "50px";

            let twos_header = document.createElement('h2');
            twos_header.style.textAlign = "center";
            twos_header.style.margin = "20px";
            twos_header.innerText = "Top 3 2v2 Teammates";
            player_info.appendChild(twos_header);
            
            topThreeTwos.forEach(teammate => {
                let twosItem = document.createElement('div');
                twosItem.style.border = "1px solid black";
                twosItem.style.padding = "10px";
                twosItem.style.margin = "0 20px";
                twosItem.innerHTML = `
                    <p>Team: ${teammate.teamname}</p>
                    <p>Rating: ${teammate.rating}</p>
                    <p>Peak Rating: ${teammate.peak_rating}</p>
                    <p>Wins: ${teammate.wins}</p>
                    <p>Losses: ${teammate.games - teammate.wins}</p>
                    <p>Win Rate: ${((teammate.wins / teammate.games) * 100).toFixed(2)}%</p>
                `;
                twos_div.appendChild(twosItem);
            });

            player_info.appendChild(twos_div);
            main.appendChild(player_info);
        })
        .catch(error => {
            console.error('Error:', error);
            let player_info = document.createElement('div');
            player_info.style.textAlign = "center";
            player_info.style.marginTop = "50px";
            player_info.style.fontSize = "20px";
            player_info.style.color = "Black";
            player_info.innerHTML = `<p>Player not found</p>`;
            main.appendChild(player_info);
        });
});

let footer = document.createElement('div');
footer.style.textAlign = "center";
footer.style.marginTop = "50px";
footer.style.fontSize = "20px";
footer.style.color = "Black";
footer.innerHTML = "Developed by <a href='https://github.com/FCsab'>FCsab</a>";

main.appendChild(footer);