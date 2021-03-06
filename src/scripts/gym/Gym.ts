///<reference path="GymPokemon.ts"/>
///<reference path="../pokemons/PokemonFactory.ts"/>

/**
 * Gym class.
 */
class Gym {
    leaderName: string;
    town: string;
    pokemons: GymPokemon[];
    badgeReward: GameConstants.Badge;
    moneyReward: number;
    badgeReq: GameConstants.Badge;
    defeatMessage: string;

    constructor(leaderName: string, town: string, pokemons: GymPokemon[], badgeReward: GameConstants.Badge, moneyReward: number, badgeReq: GameConstants.Badge, rewardMessage: string) {
        this.leaderName = leaderName;
        this.town = town;
        this.pokemons = pokemons;
        this.badgeReward = badgeReward;
        this.moneyReward = moneyReward;
        this.badgeReq = badgeReq;
        this.defeatMessage = rewardMessage;
    }

    public static isUnlocked(gym: Gym): boolean {
        return player.hasBadge(gym.badgeReq);
    }

    public static calculateCssClass(gym: Gym): KnockoutComputed<string> {
        return ko.computed(function () {
            if (player.hasBadge(gym.badgeReward)) {
                return "btn btn-success"
            }
            return "btn btn-secondary"
        });
    }

    public static getLeaderByBadge(badge: GameConstants.Badge): string {
        for (let item in gymList) {
            let gym = gymList[item];
            if (GameConstants.Badge[gym.badgeReward] == GameConstants.Badge[GameConstants.Badge[badge]]) {
                return gym.leaderName;
            }
        }
        return "Brock";
    }
}

//TODO add all rewardMessages

/**
 * Data list that contains all gymLeaders, accessible by townName.
 */
const gymList: { [townName: string]: Gym } = {};
gymList["Pewter City"] = new Gym(
    "Brock",
    "Pewter City",
    [new GymPokemon("Geodude", 770, 12),
        new GymPokemon("Onix", 1554, 14)],
    GameConstants.Badge.Boulder,
    250,
    GameConstants.Badge.None,
    "I took you for granted, and so I lost. As proof of your victory, I confer on you this...the official Pokémon League BoulderBadge.");

gymList["Cerulean City"] = new Gym(
    "Misty",
    "Cerulean City",
    [new GymPokemon("Staryu", 4000, 18),
        new GymPokemon("Starmie", 6800, 21)],
    GameConstants.Badge.Cascade,
    500,
    GameConstants.Badge.Boulder,
    "Wow! You're too much, all right! You can have the CascadeBadge to show that you beat me."
);
gymList["Vermillion City"] = new Gym(
    "Lt. Surge",
    "Vermillion City",
    [new GymPokemon("Voltorb", 10780, 21),
        new GymPokemon("Pikachu", 13540, 18),
        new GymPokemon("Raichu", 15675, 24)],
    GameConstants.Badge.Thunder,
    1000,
    GameConstants.Badge.Cascade,
    "Now that's a shocker! You're the real deal, kid! Fine, then, take the ThunderBadge!"
);
gymList["Celadon City"] = new Gym(
    "Erika",
    "Celadon City",
    [new GymPokemon("Victreebel", 28810, 29),
        new GymPokemon("Tangela", 30340, 24),
        new GymPokemon("Vileplume", 36400, 29)],
    GameConstants.Badge.Rainbow,
    1500,
    GameConstants.Badge.Thunder,
    "Oh! I concede defeat. You are remarkably strong. I must confer on you the RainbowBadge."
);
gymList["Saffron City"] = new Gym(
    "Sabrina",
    "Saffron City",
    [new GymPokemon("Kadabra", 23040, 38),
        new GymPokemon("Mr. Mime", 25600, 37),
        new GymPokemon("Venomoth", 28400, 38),
        new GymPokemon("Alakazam", 35380, 43)],
    GameConstants.Badge.Marsh,
    2500,
    GameConstants.Badge.Rainbow,
    "This loss shocks me! But a loss is a loss. I admit I didn't work hard enough to win. You earned the MarshBadge."
);
gymList["Fuchsia City"] = new Gym(
    "Koga",
    "Fuchsia City",
    [new GymPokemon("Koffing", 30780, 38),
        new GymPokemon("Muk", 32460, 37),
        new GymPokemon("Koffing", 36540, 38),
        new GymPokemon("Weezing", 37430, 43)],
    GameConstants.Badge.Soul,
    3500,
    GameConstants.Badge.Marsh,
    "Humph! You have proven your worth! Here! Take the SoulBadge!"
);
gymList["Cinnabar Island"] = new Gym(
    "Blaine",
    "Cinnabar Island",
    [new GymPokemon("Growlithe", 37430, 42),
        new GymPokemon("Ponyta", 42340, 40),
        new GymPokemon("Rapidash", 45230, 42),
        new GymPokemon("Arcanine", 50290, 47)],
    GameConstants.Badge.Volcano,
    5000,
    GameConstants.Badge.Soul,
    "I have burned down to nothing! Not even ashes remain! You have earned the VolcanoBadge."
);
gymList["Viridian City"] = new Gym(
    "Giovanni",
    "Viridian City",
    [new GymPokemon("Rhyhorn", 45230, 45),
        new GymPokemon("Dugtrio", 47530, 42),
        new GymPokemon("Nidoqueen", 48740, 44),
        new GymPokemon("Nidoking", 48350, 45),
        new GymPokemon("Rhydon", 55000, 50)],
    GameConstants.Badge.Earth,
    6000,
    GameConstants.Badge.Volcano,
    "Ha! That was a truly intense fight. You have won! As proof, here is the EarthBadge!"
);
gymList["Elite Lorelei"] = new Gym(
    "Lorelei",
    "Elite Lorelei",
    [new GymPokemon("Dewgong", 45330, 52),
        new GymPokemon("Cloyster", 48300, 51),
        new GymPokemon("Slowbro", 52000, 52),
        new GymPokemon("Jynx", 57000, 54),
        new GymPokemon("Lapras", 60250, 54),],
    GameConstants.Badge.Lorelei,
    7500,
    GameConstants.Badge.Earth,
    "...Things shouldn't be this way!"
);
gymList["Elite Bruno"] = new Gym(
    "Bruno",
    "Elite Bruno",
    [new GymPokemon("Onix", 45330, 51),
        new GymPokemon("Hitmonchan", 48300, 53),
        new GymPokemon("Hitmonlee", 52000, 53),
        new GymPokemon("Onix", 57000, 54),
        new GymPokemon("Machamp", 60250, 56),],
    GameConstants.Badge.Bruno,
    7500,
    GameConstants.Badge.Lorelei,
    "Why? How could I lose?"
);
gymList["Elite Agatha"] = new Gym(
    "Agatha",
    "Elite Agatha",
    [new GymPokemon("Gengar", 45330, 54),
        new GymPokemon("Golbat", 48300, 54),
        new GymPokemon("Haunter", 52000, 53),
        new GymPokemon("Arbok", 57000, 56),
        new GymPokemon("Gengar", 60250, 58),],
    GameConstants.Badge.Agatha,
    7500,
    GameConstants.Badge.Bruno,
    "Oh, my! You're something special, child!"
);
gymList["Elite Lance"] = new Gym(
    "Lance",
    "Elite Lance",
    [new GymPokemon("Gyarados", 48300, 56),
        new GymPokemon("Dragonair", 52000, 54),
        new GymPokemon("Dragonair", 57000, 54),
        new GymPokemon("Aerodactyl", 60250, 58),
        new GymPokemon("Dragonite", 66000, 60),],
    GameConstants.Badge.Lance,
    7500,
    GameConstants.Badge.Agatha,
    "That’s it! I hate to admit it, but you are a Pokémon master!"
);
//TODO make champion Gym
