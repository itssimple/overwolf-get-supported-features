'use strict';
if (typeof exports !== 'undefined') {
    Object.defineProperty(exports, '__esModule', { value: true });
}

/**
 * An enum that contains all games that support events through Overwolf
 */
const OverwolfGameWithEventSupport = {
    APEX: 21566,
    CSGO: 7764,
    DOTA2: 7314,
    DOTAUnderlords: 21586,
    EscapeFromTarkov: 21634,
    Fortnite: 21216,
    Hearthstone: 9898,
    HeroesOfTheStorm: 10624,
    LeagueOfLegends: 5426,
    LegendsOfRuneterra: 21620,
    MTGArena: 21308,
    PUBG: 10906,
    PUBGLite: 21598,
    PathOfExile: 7212,
    RainbowSixSiege: 10826,
    RocketLeague: 10798,
    Splitgate: 21404,
    StarCraft2: 5855,
    TeamfightTactics: 5426,
    Valorant: 21640,
    WorldOfTanks: 6365,
    WorldOfWarcraft: 765,
    WorldOfWarships: 10746
};

/**
 * Enum that contains the supported events per game, these will automatically register with setRequiredFeatures when the game is detected
 */
const OverwolfGameSupportedEvents = {
    APEX: ['gep_internal', 'me', 'team', 'kill', 'damage', 'death', 'revive', 'match_state', 'match_info', 'inventory', 'location', 'match_summary', 'roster', 'rank', 'kill_feed'],
    CSGO: ['gep_internal', 'match_info', 'kill', 'death', 'assist', 'headshot', 'round_start', 'match_start', 'match_info', 'match_end', 'team_round_win', 'bomb_planted', 'bomb_change', 'reloading', 'fired', 'weapon_change', 'weapon_acquired', 'info', 'roster', 'player_activity_change', 'team_set', 'replay', 'counters', 'mvp', 'scoreboard', 'kill_feed'],
    DOTA2: ['gep_internal', 'game_state_changed', 'match_state_changed', 'match_detected', 'daytime_changed', 'clock_time_changed', 'ward_purchase_cooldown_changed', 'match_ended', 'kill', 'assist', 'death', 'cs', 'xpm', 'gpm', 'gold', 'hero_leveled_up', 'hero_respawned', 'hero_buyback_info_changed', 'hero_boughtback', 'hero_health_mana_info', 'hero_status_effect_changed', 'hero_attributes_skilled', 'hero_ability_skilled', 'hero_ability_used', 'hero_ability_cooldown_changed', 'hero_ability_changed', 'hero_item_cooldown_changed', 'hero_item_changed', 'hero_item_used', 'hero_item_consumed', 'hero_item_charged', 'match_info', 'roster', 'party', 'error', 'hero_pool', 'me', 'game'],
    DOTAUnderlords: ['gep_internal', 'match_info'],
    EscapeFromTarkov: ['gep_internal', 'match_info', 'game_info'],
    Fortnite: ['gep_internal', 'kill', 'killed', 'revived', 'death', 'match', 'match_info', 'rank', 'me', 'phase', 'location', 'team', 'items', 'counters'],
    Hearthstone: ['gep_internal', 'scene_state', 'collection', 'decks', 'match', 'match_info'],
    HeroesOfTheStorm: ['gep_internal', 'match_info', 'me', 'game_info', 'roster', 'death', 'kill'],
    LeagueOfLegends: ['gep_internal', 'live_client_data', 'matchState', 'match_info', 'death', 'respawn', 'abilities', 'kill', 'assist', 'gold', 'minions', 'summoner_info', 'gameMode', 'teams', 'level', 'announcer', 'counters', 'damage', 'heal'],
    LegendsOfRuneterra: ['game_client_data'],
    MTGArena: ['gep_internal', 'game_info', 'match_info'],
    PUBG: ['gep_internal', 'kill', 'revived', 'death', 'killer', 'match', 'rank', 'counters', 'location', 'me', 'team', 'phase', 'map', 'roster'],
    PUBGLite: ['gep_internal', 'kill', 'revived', 'death', 'killer', 'match', 'rank', 'me', 'phase', 'map', 'team_feed'],
    PathOfExile: ['gep_internal', 'kill', 'death', 'me', 'match_info'],
    RainbowSixSiege: ['gep_internal', 'game_info', 'match', 'match_info', 'roster', 'kill', 'death', 'me'],
    RocketLeague: ['gep_internal', 'stats', 'teamGoal', 'opposingTeamGoal', 'match', 'roster', 'me', 'match_info'],
    Splitgate: ['gep_internal', 'game_info', 'match_info', 'player', 'location', 'match', 'feed', 'connection', 'kill', 'death', 'portal', 'assist'],
    StarCraft2: ['gep_internal', 'match_info'],
    TeamfightTactics: ['gep_internal', 'live_client_data', 'me', 'match_info', 'roster', 'store', 'board', 'bench', 'carousel'],
    Valorant: ['gep_internal', 'me', 'game_info', 'match_info', 'kill', 'death'],
    WorldOfTanks: ['gep_internal', 'kill', 'death', 'game_info', 'match_info'],
    WorldOfWarcraft: ['game_info'],
    WorldOfWarships: ['gep_internal', 'game_info', 'account_info', 'match', 'match_info', 'kill', 'death']
};

/**
 * @typedef {Object} OverwolfGameWithEvents
 * @property {string} game
 * @property {string[]} events
 */

/**
 * Gets the supported events for the specified classId
 * @param {Number} classId This is the classId you get from the gameInfo-object
 * @returns {game: string, events: string[]} Returns an array of supported events if there's a game that corresponds to the classId, otherwise null
 */
function getSupportedFeatures (classId) {
    let game = Object.keys(OverwolfGameWithEventSupport).find(key => OverwolfGameWithEventSupport[key] == classId);
    if (game) {
        return { game: game, events: OverwolfGameSupportedEvents[game] };
    }

    return null;
}

if (typeof overwolf !== 'undefined' && typeof overwolf.games !== 'undefined') {
    overwolf.games.getSupportedFeatures = getSupportedFeatures;
}

if (typeof exports !== 'undefined') {
    exports.getSupportedFeatures = getSupportedFeatures;
}