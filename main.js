// ==================== ANIMATIONS ====================
const animations = {
    player: {
        idle: [
            'https://i.imgur.com/RbM9tQQ.png',
            'https://i.imgur.com/2bkeXCS.png',
            'https://i.imgur.com/fSOUE7i.png',
            'https://i.imgur.com/83mPjq8.png',
            'https://i.imgur.com/hjeP8Hb.png',
            'https://i.imgur.com/lRkYkWw.png',
            'https://i.imgur.com/E8ylMWz.png',
            'https://i.imgur.com/Ztc8jS5.png'
        ],
        run: [
            'https://i.imgur.com/vCXH6AG.png',
            'https://i.imgur.com/5GNelZz.png',
            'https://i.imgur.com/iwQSS4V.png',
            'https://i.imgur.com/RUohlJh.png',
            'https://i.imgur.com/G3JxYEc.png',
            'https://i.imgur.com/kY49hjj.png'
        ],
        attack: [
            'https://i.imgur.com/LGnb6an.png',
            'https://i.imgur.com/VeQjBul.png',
            'https://i.imgur.com/ppn1Z9d.png',
            'https://i.imgur.com/IXSNByH.png',
            'https://i.imgur.com/E1ku52E.png',
            'https://i.imgur.com/7jhK13F.png'
        ],
        hit: [
            'https://i.imgur.com/DXN3FyJ.png',
            'https://i.imgur.com/PNZPzAB.png',
            'https://i.imgur.com/ZsemvAM.png',
            'https://i.imgur.com/gTBaiqb.png',
            'https://i.imgur.com/ZaTPFNk.png',
            'https://i.imgur.com/bwPxcrK.png'
        ],
        
        // LIGHTNING FORM ANIMATIONS
        lightning_idle: [
            'https://i.imgur.com/IIi37fC.png',
            'https://i.imgur.com/zi5cTbN.png',
            'https://i.imgur.com/p80C7zD.png',
            'https://i.imgur.com/nClOgbe.png',
            'https://i.imgur.com/1vlAu08.png',
            'https://i.imgur.com/2P3deJQ.png',
            'https://i.imgur.com/yfOO29u.png',
            'https://i.imgur.com/VP75J3h.png'
        ],
        lightning_run: [
            'https://i.imgur.com/vCXH6AG.png',
            'https://i.imgur.com/5GNelZz.png',
            'https://i.imgur.com/iwQSS4V.png',
            'https://i.imgur.com/RUohlJh.png',
            'https://i.imgur.com/G3JxYEc.png',
            'https://i.imgur.com/kY49hjj.png'
        ],
        lightning_attack: [
            'https://i.imgur.com/LGnb6an.png',
            'https://i.imgur.com/VeQjBul.png',
            'https://i.imgur.com/ppn1Z9d.png',
            'https://i.imgur.com/IXSNByH.png',
            'https://i.imgur.com/E1ku52E.png',
            'https://i.imgur.com/7jhK13F.png'
        ],
        lightning_hit: [
            'https://i.imgur.com/DXN3FyJ.png',
            'https://i.imgur.com/PNZPzAB.png',
            'https://i.imgur.com/ZsemvAM.png',
            'https://i.imgur.com/gTBaiqb.png',
            'https://i.imgur.com/ZaTPFNk.png',
            'https://i.imgur.com/bwPxcrK.png'
        ],
        
        // BLOOD LIGHTNING FORM ANIMATIONS
        blood_lightning_idle: [
            'https://i.imgur.com/A3oDecm.png',
            'https://i.imgur.com/Imd1ywy.png',
            'https://i.imgur.com/cJu2Dl3.png',
            'https://i.imgur.com/5THiskd.png',
            'https://i.imgur.com/AJhuWWJ.png',
            'https://i.imgur.com/4voXAu4.png',
            'https://i.imgur.com/ldbY2gm.png',
            'https://i.imgur.com/PZT2o7d.png'
        ],
        blood_lightning_run: [
            'https://i.imgur.com/vCXH6AG.png',
            'https://i.imgur.com/5GNelZz.png',
            'https://i.imgur.com/iwQSS4V.png',
            'https://i.imgur.com/RUohlJh.png',
            'https://i.imgur.com/G3JxYEc.png',
            'https://i.imgur.com/kY49hjj.png'
        ],
        blood_lightning_attack: [
            'https://i.imgur.com/LGnb6an.png',
            'https://i.imgur.com/VeQjBul.png',
            'https://i.imgur.com/ppn1Z9d.png',
            'https://i.imgur.com/IXSNByH.png',
            'https://i.imgur.com/E1ku52E.png',
            'https://i.imgur.com/7jhK13F.png'
        ],
        blood_lightning_hit: [
            'https://i.imgur.com/DXN3FyJ.png',
            'https://i.imgur.com/PNZPzAB.png',
            'https://i.imgur.com/ZsemvAM.png',
            'https://i.imgur.com/gTBaiqb.png',
            'https://i.imgur.com/ZaTPFNk.png',
            'https://i.imgur.com/bwPxcrK.png'
        ],

        // BLUE FIRE (WATER) FORM ANIMATIONS
        blue_fire_idle: [
            'https://i.imgur.com/L0uHhFj.png',
            'https://i.imgur.com/cSVC3DT.png',
            'https://i.imgur.com/tHF500C.png',
            'https://i.imgur.com/kCIsHxX.png',
            'https://i.imgur.com/19kAvLd.png',
            'https://i.imgur.com/o2VqI84.png',
            'https://i.imgur.com/WlKL1yV.png',
            'https://i.imgur.com/6Ev1eb1.png',
            'https://i.imgur.com/eT4PMQT.png'
        ],
        
        // WATER FORM ANIMATIONS
        water_idle: [
            'https://i.imgur.com/L0uHhFj.png',
            'https://i.imgur.com/cSVC3DT.png',
            'https://i.imgur.com/tHF500C.png',
            'https://i.imgur.com/kCIsHxX.png',
            'https://i.imgur.com/19kAvLd.png',
            'https://i.imgur.com/o2VqI84.png',
            'https://i.imgur.com/WlKL1yV.png',
            'https://i.imgur.com/6Ev1eb1.png',
            'https://i.imgur.com/eT4PMQT.png'
        ],

        // TRANSFORMATION ANIMATIONS
        lightning_to_blood: [
            'https://i.imgur.com/GXTT9VB.png',
            'https://i.imgur.com/o5gEolT.png',
            'https://i.imgur.com/fvc5JhY.png',
            'https://i.imgur.com/goJZGfv.png',
            'https://i.imgur.com/geRkMhc.png',
            'https://i.imgur.com/OS7iPai.png',
            'https://i.imgur.com/SnQFtxz.png',
            'https://i.imgur.com/xptjHgV.png'
        ]
    },
    enemy: {
        idle: [
            'https://i.imgur.com/8Ja1wGh.png',
            'https://i.imgur.com/GeoOd3v.png',
            'https://i.imgur.com/CAu5x7v.png',
            'https://i.imgur.com/xhsgSip.png',
            'https://i.imgur.com/GNVJUrG.png',
            'https://i.imgur.com/WIT2TO9.png',
            'https://i.imgur.com/JA7jlqW.png',
            'https://i.imgur.com/XLwgOtq.png'
        ],
        run: [
            'https://i.imgur.com/o6NyRAO.png',
            'https://i.imgur.com/VuPpbNc.png',
            'https://i.imgur.com/CojSxQB.png',
            'https://i.imgur.com/5OexHen.png',
            'https://i.imgur.com/VFKWjy3.png',
            'https://i.imgur.com/bubRcLz.png',
            'https://i.imgur.com/CyDr8UJ.png',
            'https://i.imgur.com/UCLuMRC.png'
        ],
        attack: [
            'https://i.imgur.com/yqFXCcH.png',
            'https://i.imgur.com/eX1I54U.png',
            'https://i.imgur.com/gqyPEFE.png',
            'https://i.imgur.com/UiTtBuh.png',
            'https://i.imgur.com/oBK7C5W.png',
            'https://i.imgur.com/s4OaR8n.png'
        ],
        hit: [
            'https://i.imgur.com/JoVxjIp.png',
            'https://i.imgur.com/knZX8Jm.png',
            'https://i.imgur.com/YPuxHiD.png',
            'https://i.imgur.com/uYrjnQf.png',
            'https://i.imgur.com/fdr4Kqj.png',
            'https://i.imgur.com/v2TOWyu.png'
        ],
        breaking: [
            'https://i.imgur.com/zMGCSKr.png',
            'https://i.imgur.com/fksz5Fe.png',
            'https://i.imgur.com/MGP2eVV.png',
            'https://i.imgur.com/OdtoJ1f.png',
            'https://i.imgur.com/NRP5iEO.png',
            'https://i.imgur.com/D1N1Qew.png',
            'https://i.imgur.com/ReGesfk.png'
        ],
        broken: [
            'https://i.imgur.com/ReGesfk.png' // Stay on last frame
        ],
        recovery: [
            'https://i.imgur.com/pOlUXBn.png',
            'https://i.imgur.com/0mxagcf.png',
            'https://i.imgur.com/DkOa3xg.png',
            'https://i.imgur.com/V5dZk8b.png',
            'https://i.imgur.com/YCnNWgI.png'
        ]
    }
};

// ==================== GAME DATA ====================
const team = [
    {
        id: 1,
        name: "Player 1",
        portrait: "⚔️",
        hp: 120,
        maxHp: 120,
        shield: 30,
        maxShield: 30,
        energy: 0,
        maxEnergy: 200,
        speed: 100,
        color: "#FF6B6B",
        elements: ["🔥", "⚡"], // Fire and Lightning
        position: { left: 600, bottom: 260 },
        counterStacks: 0,  // NEW: Counter system
        maxCounterStacks: 3,
        baseDamage: 25,  // NEW: For counter attack calculations
        form: 'base',
        bloodLightningBonus: 0,
        sacrificedForm: null
    },
    {
        id: 2,
        name: "Player 2",
        portrait: "🛡️",
        hp: 120,
        maxHp: 120,
        shield: 30,
        maxShield: 30,
        energy: 0,
        maxEnergy: 200,
        speed: 95,
        color: "#60A5FA",
        elements: ["💧", "❄️"], // Water and Ice
        position: { left: 480, bottom: 320 }, // More left, higher
        counterStacks: 0,  // NEW: Counter system
        maxCounterStacks: 3,
        baseDamage: 22,  // NEW: For counter attack calculations
        form: 'base',
        bloodLightningBonus: 0,
        sacrificedForm: null
    },
    {
        id: 3,
        name: "Player 3",
        portrait: "🩹",
        hp: 110,
        maxHp: 110,
        shield: 20,
        maxShield: 20,
        energy: 0,
        maxEnergy: 200,
        speed: 92,
        color: "#34d399",
        elements: ["✨", "🌿"],
        position: { left: 360, bottom: 380 },
        counterStacks: 0,
        maxCounterStacks: 3,
        baseDamage: 20,
        form: 'base',
        bloodLightningBonus: 0,
        sacrificedForm: null
    }
];

let currentWave = 1;
const maxWaves = 10;

let enemies = [];

let skillPoints = 3;
const maxSkillPoints = 5;
const energyCosts = {
    lightning: 120,
    blue_fire: 150,
    strengthened_blue_fire: 150,
    blood_lightning: 200
};
const formEffects = {
    base: { damageMultiplier: 1, breakMultiplier: 1, bleed: 0, burn: 0 },
    lightning: { damageMultiplier: 1.6, breakMultiplier: 1.4, bleed: 0, burn: 0 },
    blue_fire: { damageMultiplier: 1.8, breakMultiplier: 1.2, bleed: 0, burn: 18 },
    strengthened_blue_fire: { damageMultiplier: 2.3, breakMultiplier: 1.5, bleed: 0, burn: 24 },
    blood_lightning: { damageMultiplier: 2.2, breakMultiplier: 2.0, bleed: 22, burn: 0 }
};
const availableForms = {
    lightning: true,
    blue_fire: true,
    blood_lightning: false
};

const basePlayerPositions = {
    1: { left: 600, bottom: 260 },
    2: { left: 480, bottom: 320 },
    3: { left: 360, bottom: 380 }
};

const playerFormLocks = {};
let sacrificeMode = false;
let pendingSacrifice = null;
let pendingAllyAction = null;
let lastEnemyClickId = null;
let lastEnemyClickTime = 0;
let sharedEnergy = 0;
const energyGain = {
    punch: 0,
    heavy: 50,
    barrage: 60
};
let turnOrder = [];
let currentTurnIndex = 0;
let selectedEnemy = null;
let isAnimating = false;
let pendingAction = null;
let playerTurnActive = false; // PHASE 3: Track if it's player's turn for selection marker
let tutorialActive = false;
let tutorialAwait = null;
let currentActionAnnouncement = null;
let lastPlayerTurnId = null;
let audioContext = null;
let audioMasterGain = null;
let audioMusicGain = null;
let audioSfxGain = null;
let audioMusicTimer = null;
let audioStep = 0;
let keyboardHelpTimer = null;
let keyboardHelpKey = null;
let gameSpeed = 1; // 1x or 2x speed
let allowButtonConfirm = false; // Track if confirm is allowed (via click/space/enter)
let lastInputSource = 'mouse';

// Element damage colors
const elementColors = {
    '🔥': '#ef4444', // Fire - Red
    '⚡': '#eab308', // Lightning - Yellow
    '💧': '#3b82f6', // Water - Blue
    '❄️': '#06b6d4', // Ice - Cyan
};

const PLAYER_START_LEFT = 600;  // Matches Player 1's position
const PLAYER_START_BOTTOM = 260;

const playerAnimIntervals = {}; // Track animations for each player
let enemyAnimIntervals = {};

const keybinds = {
    punch: { key: 'w', label: 'W', description: 'Punch: free single hit. Builds SP and Energy.' },
    heavy: { key: 'q', label: 'Q', description: 'Heavy: costs 1 SP. Big damage and heavy break.' },
    barrage: { key: 'e', label: 'E', description: 'Barrage: costs 2 SP. Four quick hits.' },
    heal: { key: 'a', label: 'A', description: 'Heal: spend 1 SP to restore HP to the most injured ally.' },
    shield: { key: 'd', label: 'D', description: 'Shield: spend 1 SP to grant shield to the most injured ally.' },
    lightning: { key: 'z', label: 'Z', description: 'Lightning Form: +60% damage, +40% break.' },
    blue_fire: { key: 'x', label: 'X', description: 'Blue Fire Form: +80% damage, +20% break, adds burn.' },
    blood_lightning: { key: 'c', label: 'C', description: 'Blood Lightning: +120% damage, +100% break, adds bleed. Devour bonuses: base +0%, lightning +20%, blue fire +30%, strengthened blue fire +50%.' },
    confirm: { key: 'space/enter', label: '⏎', description: 'Confirm the selected action.' },
    cancel: { key: 'esc', label: 'Esc', description: 'Cancel the selected action.' },
    cycle: { key: '←/→', label: '←/→', description: 'Cycle enemies.' }
};

function autoSelectNextEnemy() {
    const nextEnemy = enemies.find(e => e.hp > 0);
    if (nextEnemy) {
        selectEnemy(nextEnemy.id);
    } else {
        selectedEnemy = null;
        updateButtonStates();
        updateTransformButtons();
    }
}

function resetArmedConfirm() {
    allowButtonConfirm = false;
}

function getRandomWeaknesses() {
    const elements = ['🔥', '⚡', '💧', '❄️', '✨', '🌿'];
    const count = Math.random() < 0.6 ? 1 : 2;
    const pool = [...elements].sort(() => Math.random() - 0.5);
    return pool.slice(0, count);
}

function createEnemiesForWave(wave) {
    const hpMultiplier = 1 + 0.35 * (wave - 1);      // Enemies get tankier each wave
    const toughMultiplier = 1 + 0.25 * (wave - 1);   // Toughness also scales
    const speedBonus = (wave - 1) * 3;               // Slightly faster each wave
    const attackMultiplier = 1 + 0.08 * (wave - 1);  // Attacks scale with waves

    const shadowBaseHp = 180;
    const shadowBaseTough = 100;
    const voidBaseHp = 150;
    const voidBaseTough = 80;

    const waveEnemies = [
        {
            id: 1,
            name: `Shadow Beast W${wave}`,
            emoji: "👹",
            hp: Math.round(shadowBaseHp * hpMultiplier),
            maxHp: Math.round(shadowBaseHp * hpMultiplier),
            toughness: Math.round(shadowBaseTough * toughMultiplier),
            maxToughness: Math.round(shadowBaseTough * toughMultiplier),
            weaknesses: getRandomWeaknesses(),
            speed: 100 + speedBonus,
            position: { right: 360, bottom: 520 },
            originalPosition: { right: 360, bottom: 520 },
            isBroken: false,
            breakTurnsRemaining: 0,
            breakDamageMultiplier: 2.0,
            attackMultiplier
        },
        {
            id: 2,
            name: `Void Stalker W${wave}`,
            emoji: "👾",
            hp: Math.round(voidBaseHp * hpMultiplier),
            maxHp: Math.round(voidBaseHp * hpMultiplier),
            toughness: Math.round(voidBaseTough * toughMultiplier),
            maxToughness: Math.round(voidBaseTough * toughMultiplier),
            weaknesses: getRandomWeaknesses(),
            speed: 105 + speedBonus,
            position: { right: 500, bottom: 580 },
            originalPosition: { right: 500, bottom: 580 },
            isBroken: false,
            breakTurnsRemaining: 0,
            breakDamageMultiplier: 2.0,
            attackMultiplier
        }
    ];

    if (wave === maxWaves) {
        const bossHp = Math.round(shadowBaseHp * hpMultiplier * 3);
        const bossTough = Math.round(shadowBaseTough * toughMultiplier * 2);
        waveEnemies.push({
            id: 3,
            name: 'Shadow Lord',
            emoji: "👑",
            hp: bossHp,
            maxHp: bossHp,
            toughness: bossTough,
            maxToughness: bossTough,
            weaknesses: getRandomWeaknesses(),
            speed: 110 + speedBonus,
            position: { right: 640, bottom: 640 },
            originalPosition: { right: 640, bottom: 640 },
            isBroken: false,
            breakTurnsRemaining: 0,
            breakDamageMultiplier: 2.0,
            attackMultiplier: attackMultiplier * 1.15,
            isBoss: true
        });
    }

    return waveEnemies;
}

// Tutorial state
    let tutorialStep = 0;
const tutorialSteps = [
    {
        title: 'Welcome to Echoes of Insanity',
        body: `
            <p>You control a team of up to four units on the left against waves of up to four enemies on the right.</p>
            <ul>
                <li>Turn order is shown in the sidebar on the left (NEXT at the top).</li>
                <li>The glowing portrait at the bottom is the unit whose turn it is.</li>
                <li>Click an enemy to put the red targeting ring under it.</li>
            </ul>
            <p><strong>Try it now:</strong> select any enemy to continue.</p>
        `,
        highlight: '#enemiesContainer',
        await: { type: 'select_enemy', label: 'Select an enemy' }
    },
    {
        title: 'Turn Order',
        body: `
            <p>Turns cycle by speed from top to bottom.</p>
            <ul>
                <li>Next to act appears at the top.</li>
                <li>Each action advances the order.</li>
            </ul>
        `,
        highlight: '#turnOrderSidebar'
    },
    {
        title: 'Skill Points (SP)',
        body: `
            <p>SP powers your stronger attacks.</p>
            <ul>
                <li>Heavy costs 1 SP, Barrage costs 2 SP.</li>
                <li>You gain SP whenever you attack.</li>
            </ul>
        `,
        highlight: '.sp-display'
    },
    {
        title: 'Element Weakness',
        body: `
            <p>Enemies are weak to certain elements.</p>
            <ul>
                <li>Match an element icon to break toughness faster.</li>
                <li>Weakness icons sit above the enemy bars.</li>
            </ul>
        `,
        highlight: '.enemy-weaknesses'
    },
    {
        title: 'Basic Attacks and SP',
        body: `
            <p>You have three attacks around the triangle of buttons:</p>
            <ul>
                <li><strong>Punch</strong> – free single hit. Good for building energy and SP.</li>
                <li><strong>Heavy</strong> – costs 1 SP, deals big damage and fully breaks toughness.</li>
                <li><strong>Barrage</strong> – costs 2 SP, 4 rapid punches. Great for shredding broken foes.</li>
                <li>SP (Skill Points) are the yellow icons – you gain them by attacking.</li>
                <li>All attacks are <strong>double-tap</strong>: click once to arm the attack, then click the same button again to confirm and execute.</li>
                <li>Make sure an enemy is selected before confirming.</li>
            </ul>
            <p><strong>Try it now:</strong> select an enemy, then confirm any attack to continue.</p>
        `,
        highlight: '.action-buttons',
        highlightClass: 'tutorial-highlight-large',
        await: { type: 'confirm_attack', label: 'Confirm an attack by double-tapping the same button.' }
    },
    {
        title: 'Keyboard Controls',
        body: `
            <p>You can play entirely with the keyboard:</p>
            <ul>
                <li><strong>W</strong> Punch, <strong>Q</strong> Heavy, <strong>E</strong> Barrage</li>
                <li><strong>A</strong> Heal, <strong>D</strong> Shield</li>
                <li><strong>Z</strong> Lightning, <strong>X</strong> Blue Fire, <strong>C</strong> Blood Lightning</li>
                <li><strong>←/→</strong> cycle enemies, <strong>Enter/Space</strong> confirm</li>
                <li><strong>Hold</strong> any action key to show its description</li>
                <li><strong>Esc</strong> cancels the selected action</li>
            </ul>
        `,
        highlight: '.actions-panel'
    },
    {
        title: 'Battle Speed',
        body: `
            <p>Use the speed toggle in this panel to control pacing.</p>
            <p id="tutorialSpeedLabel">Current speed: 1x</p>
        `,
        highlight: '#tutorialPanel'
    },
    {
        title: 'Weakness and Break',
        body: `
            <p>Each enemy has a white toughness bar above its HP and element icons for weaknesses.</p>
            <ul>
                <li>Hitting a weakness element shreds toughness faster.</li>
                <li>When toughness reaches 0, the enemy is <strong>Broken</strong> and stunned for several turns.</li>
                <li>Broken enemies take greatly increased damage from all hits.</li>
                <li>Hover enemies and buttons to read their explanations.</li>
            </ul>
        `
        ,
        highlight: '.enemy-break-bar-wrapper'
    },
    {
        title: 'Energy and Transformations',
        body: `
            <p>Your characters build <strong>shared Energy</strong> (0–200) when you use skills.</p>
            <ul>
                <li>Lightning opens additional upgrade paths.</li>
                <li>Hover over form buttons for details.</li>
            </ul>
        `,
        highlight: '#energyPanel'
    },
    {
        title: 'Enemy Waves and Victory',
        body: `
            <p>The fight is a 10-wave gauntlet.</p>
            <ul>
                <li>Each wave has two enemies that get tougher and faster each time.</li>
                <li>Defeat all enemies in a wave to automatically spawn the next one.</li>
                <li>After clearing wave 10 you win the battle.</li>
                <li>If all of your team members fall, the battle is lost.</li>
            </ul>
        `
    }
];

// ==================== INITIALIZATION ====================
function init() {
    setupAudioUnlock();
    ensureHoverBlurb();
    createAtmosphere();
    renderCharacters();
    renderPlayerCharacters(); // Render player sprites on battlefield
    currentWave = 1;
    enemies = createEnemiesForWave(currentWave);
    renderEnemies();
    calculateTurnOrder();
    setTurnToFirstLivingPlayer();
    renderTurnOrderSidebar();
    updateSPDisplay();
    updateActiveCharacter();
    updateButtonStates();
    updateTransformButtons();
    updateCharacterDisplay();
    
    // Initialize all player animations
    team.forEach(player => {
        playPlayerAnimation(player.id, 'idle', true);
    });
    
    renderEnemyAnimations();
    setKeybindBadges();
    setupKeyboardControls();
    
    // Phase 1: Initialize perspective and z-index for all players
    team.forEach(player => {
        const playerChar = document.getElementById(`playerChar-${player.id}`);
        if (playerChar) {
            applyPerspectiveScale(playerChar, player.position.bottom);
        }
    });
    updateZIndexByPosition();

    
    // Initialize player health bars above sprites
    updatePlayerHPBars();

    enableButtonSounds();
    
    // Add hover listeners for break preview
    const punchBtn = document.getElementById('punchBtn');
    const heavyBtn = document.getElementById('heavyPunchBtn');
    const barrageBtn = document.getElementById('barrageBtn');
    const healBtn = document.getElementById('healBtn');
    const shieldBtn = document.getElementById('shieldBtn');
    
    if (punchBtn) {
        punchBtn.addEventListener('mouseenter', () => {
            if (selectedEnemy) {
                const enemy = enemies.find(e => e.id === selectedEnemy);
                const currentTurn = getCurrentTurn();
                const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
                const previewDamage = getBreakPreviewDamage('punch', enemy, currentPlayer);
                updateBreakPreview(selectedEnemy, previewDamage);
            }
        });
    }
    
    if (heavyBtn) {
        heavyBtn.addEventListener('mouseenter', () => {
            if (selectedEnemy) {
                const enemy = enemies.find(e => e.id === selectedEnemy);
                const currentTurn = getCurrentTurn();
                const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
                if (enemy) {
                    const previewDamage = getBreakPreviewDamage('heavy', enemy, currentPlayer);
                    updateBreakPreview(selectedEnemy, previewDamage);
                }
            }
        });
    }
    
    if (barrageBtn) {
        barrageBtn.addEventListener('mouseenter', () => {
            if (selectedEnemy) {
                const enemy = enemies.find(e => e.id === selectedEnemy);
                const currentTurn = getCurrentTurn();
                const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
                const previewDamage = getBreakPreviewDamage('barrage', enemy, currentPlayer); // 50 x 4 hits
                updateBreakPreview(selectedEnemy, previewDamage);
            }
        });
    }

    // Auto-select first enemy
    autoSelectNextEnemy();
    
    setupUIExplanations();
    createSpeedToggle();
    initTutorial();
    updateFormButtonVisibility();
    
    setTimeout(() => {
        processNextTurn();
    }, 1000);
}

function updatePlayerPositions() {
    return;
}

function setupAudioUnlock() {
    const unlock = () => {
        initAudio();
        document.removeEventListener('pointerdown', unlock);
    };
    document.addEventListener('pointerdown', unlock);
}

function initAudio() {
    if (audioContext) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioMasterGain = audioContext.createGain();
    audioMusicGain = audioContext.createGain();
    audioSfxGain = audioContext.createGain();

    audioMasterGain.gain.value = 0.6;
    audioMusicGain.gain.value = 0.18;
    audioSfxGain.gain.value = 0.6;

    audioMusicGain.connect(audioMasterGain);
    audioSfxGain.connect(audioMasterGain);
    audioMasterGain.connect(audioContext.destination);
}

function startMusic() {
    if (!audioContext || audioMusicTimer) return;
    const notes = [220, 247, 262, 294, 330, 349, 392, 330];
    audioMusicTimer = setInterval(() => {
        playTone(notes[audioStep % notes.length], 0.18, 'triangle', audioMusicGain);
        audioStep++;
    }, 420);
}

function playTone(freq, duration, type, gainNode) {
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    osc.type = type;
    osc.frequency.value = freq;
    filter.type = 'lowpass';
    filter.frequency.value = 1200;
    gain.gain.value = 0.0001;
    gain.connect(gainNode || audioSfxGain);
    filter.connect(gain);
    osc.connect(filter);
    const now = audioContext.currentTime;
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.start(now);
    osc.stop(now + duration);
}

function playSfx(type) {
    if (!audioContext) return;
    if (type === 'click') {
        playTone(420, 0.08, 'triangle');
        return;
    }
    if (type === 'hit') {
        playTone(240, 0.14, 'triangle');
    }
}

function enableButtonSounds() {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('pointerdown', () => {
            lastInputSource = 'mouse';
            if (!audioContext) {
                initAudio();
            }
            playSfx('click');
        });
    });
}

function updateFormButtonVisibility() {
    const lightningBtn = document.getElementById('lightningTransformBtn');
    const blueFireBtn = document.getElementById('blueFireTransformBtn');
    const bloodLightningBtn = document.getElementById('bloodLightningTransformBtn');
    const currentTurn = getCurrentTurn();
    const currentPlayer = currentTurn && currentTurn.type === 'player'
        ? team.find(p => p.id === currentTurn.id)
        : null;
    const lockedForm = currentPlayer ? playerFormLocks[currentPlayer.id] : null;
    if (lightningBtn) {
        lightningBtn.style.display = availableForms.lightning && lockedForm !== 'blue_fire' ? '' : 'none';
    }
    if (blueFireBtn) {
        blueFireBtn.style.display = availableForms.blue_fire && lockedForm !== 'lightning' ? '' : 'none';
        const titleEl = blueFireBtn.querySelector('span:nth-child(2)');
        const costEl = blueFireBtn.querySelector('.form-cost');
        if (currentTurn && currentTurn.type === 'player') {
            const player = team.find(p => p.id === currentTurn.id);
            if (player && player.form === 'blue_fire') {
                if (titleEl) titleEl.textContent = 'Strengthened Blue Fire';
                if (costEl) costEl.textContent = energyCosts.strengthened_blue_fire;
            } else {
                if (titleEl) titleEl.textContent = 'Blue Fire Form';
                if (costEl) costEl.textContent = energyCosts.blue_fire;
            }
        }
    }
    if (bloodLightningBtn) {
        bloodLightningBtn.style.display = availableForms.blood_lightning && lockedForm !== 'blue_fire' ? '' : 'none';
    }
}

function createAtmosphere() {
    const atmosphere = document.getElementById('atmosphere');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = Math.random() * 20 + 's';
        atmosphere.appendChild(particle);
    }
}

function renderCharacters() {
    const container = document.getElementById('charactersRow');
    container.innerHTML = '';
    
    const orderedTeam = [...team].sort((a, b) => b.id - a.id);
    orderedTeam.forEach(char => {
        const div = document.createElement('div');
        div.className = 'character-circle';
        div.id = `char-${char.id}`;
        
    const energyPercent = (sharedEnergy / char.maxEnergy) * 100;
        const circumference = 2 * Math.PI * 44;
        const offset = circumference * (1 - energyPercent / 100);
        
        div.innerHTML = `
            <div class="portrait-container">
                <svg class="energy-ring" width="95" height="95">
                    <circle cx="47.5" cy="47.5" r="44" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
                    <circle cx="47.5" cy="47.5" r="44" fill="none" stroke="${char.color}" stroke-width="3"
                        stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
                        transform="rotate(-90 47.5 47.5)" style="transition: stroke-dashoffset 0.5s ease"/>
                </svg>
                <div class="portrait" style="background: linear-gradient(135deg, ${char.color}, ${char.color}dd)">
                    ${char.portrait}
                </div>
                <div class="energy-indicator ${sharedEnergy >= energyCosts.lightning ? 'full' : ''}">${sharedEnergy}</div>
                <div class="char-elements">
                    ${char.elements.map(el => `<span class="element-icon">${el}</span>`).join('')}
                </div>
            </div>
            <div class="char-name" style="color: ${char.color}">${char.name}</div>
            <div class="stat-bar">
                <div class="stat-bar-bg">
                    <div class="stat-bar-fill hp-fill" style="width: ${(char.hp/char.maxHp)*100}%"></div>
                    <div class="shield-outline" style="width: ${(char.shield/char.maxShield)*100}%"></div>
                </div>
                <div class="stat-text">${char.hp}/${char.maxHp}</div>
                ${char.shield > 0 ? '<div class="shield-icon">🛡️</div>' : ''}
            </div>
        `;

        div.addEventListener('click', () => {
            const currentTurn = getCurrentTurn();
            if (!currentTurn || currentTurn.type !== 'player') return;
            const actingPlayer = team.find(p => p.id === currentTurn.id);
            if (!actingPlayer || actingPlayer.hp <= 0) return;
            if (char.id === actingPlayer.id || char.hp <= 0) return;

            if (sacrificeMode) {
                return;
            }

            if (pendingAction === 'heal' || pendingAction === 'shield') {
                return;
            }
        });
        container.appendChild(div);
    });
}

function renderPlayerCharacters() {
    const container = document.getElementById('playersContainer');
    container.innerHTML = '';

    updatePlayerPositions();

    team.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'character player';
        div.id = `playerChar-${player.id}`;

        div.style.left = player.position.left + 'px';
        div.style.bottom = player.position.bottom + 'px';
        
        div.innerHTML = `
            <div class="player-label">${player.name}</div>
            <div class="player-elements">
                ${player.elements.map(el => `<span class="element-icon">${el}</span>`).join('')}
            </div>
            <img id="playerSprite-${player.id}" src="" alt="${player.name}">
            <div class="turn-indicator" aria-hidden="true"></div>
        `;

        div.addEventListener('click', () => {
            if (!div.classList.contains('ally-selectable')) return;
            const currentTurn = getCurrentTurn();
            if (!currentTurn || currentTurn.type !== 'player') return;
            const actingPlayer = team.find(p => p.id === currentTurn.id);
            if (!actingPlayer || actingPlayer.hp <= 0) return;
            if (player.id === actingPlayer.id || player.hp <= 0) return;

            if (sacrificeMode) {
                pendingSacrifice = player.id;
                clearSacrificeMode();
                transformPlayer('blood_lightning');
                return;
            }

            if (pendingAction === 'heal' || pendingAction === 'shield') {
                pendingAllyAction = player.id;
                clearAllyTargets();
                allowButtonConfirm = true;
                playerAction(pendingAction);
            }
        });
        
        container.appendChild(div);
        
        // Apply perspective scaling
        applyPerspectiveScale(div, player.position.bottom);

        // Apply initial form visuals
        applyPlayerFormClass(player);
    });
}

function renderEnemies() {
    const container = document.getElementById('enemiesContainer');
    container.innerHTML = '';
    
    enemies.forEach((enemy, index) => {
        const div = document.createElement('div');
        div.className = `enemy-wrapper${enemy.isBoss ? ' boss' : ''}`;
        div.id = `enemy-${enemy.id}`;

        div.style.right = enemy.position.right + 'px';
        div.style.bottom = enemy.position.bottom + 'px';
        div.style.zIndex = 1 + index;  // Initial value within container, will be sorted by updateZIndexByPosition
        
        div.innerHTML = `
            <div class="enemy-stats">
                <div class="enemy-header">
                <div class="enemy-name">${enemy.name}${enemy.isBoss ? ' <span class="boss-indicator">BOSS</span>' : ''}</div>
                    <div class="enemy-weaknesses">
                        ${enemy.weaknesses.map(w => `<span>${w}</span>`).join('')}
                    </div>
                </div>
                <div class="enemy-break-bar-wrapper">
                    <div class="enemy-break-bar-fill" style="width: ${(enemy.toughness/enemy.maxToughness)*100}%"></div>
                </div>
                <div class="enemy-hp-bar-wrapper">
                    <div class="enemy-hp-bar-fill" style="width: ${(enemy.hp/enemy.maxHp)*100}%"></div>
                </div>
            </div>
            <div class="enemy-sprite" id="enemy-sprite-clickable-${enemy.id}">
                <img id="enemy-sprite-${enemy.id}" src="" alt="${enemy.name}">
            </div>
            <div class="selection-circle"></div>
        `;
        container.appendChild(div);
        
        // Make only the sprite clickable for better hitbox accuracy
        const spriteDiv = div.querySelector(`#enemy-sprite-clickable-${enemy.id}`);
    if (spriteDiv && enemy.hp > 0) {
        const clickHandler = (e) => {
            e.stopPropagation();
            lastInputSource = 'mouse';
            selectEnemy(enemy.id);
        };
        spriteDiv.onclick = clickHandler;
        const imgEl = spriteDiv.querySelector('img');
        if (imgEl) {
            imgEl.onclick = clickHandler;
        }
        spriteDiv.style.cursor = 'pointer';
    } else if (spriteDiv) {
        spriteDiv.style.cursor = 'not-allowed';
        div.style.opacity = '0.5';
    }
        
        // Apply perspective scaling
        applyPerspectiveScale(div, enemy.position.bottom);

    });
    
    // Update z-index after all enemies rendered
    updateZIndexByPosition();
}

function renderEnemyAnimations() {
    enemies.forEach(enemy => {
        if (enemy.isBroken) {
            playEnemyAnimation(enemy.id, 'broken', false);
        } else {
            playEnemyAnimation(enemy.id, 'idle', true);
        }
    });
}

function selectEnemy(enemyId) {
    if (isAnimating) return;
    
    const enemy = enemies.find(e => e.id === enemyId);
    if (!enemy || enemy.hp <= 0) return;
    
    selectedEnemy = enemyId;

    handleTutorialProgress('select_enemy');

    const now = Date.now();
    const attackActions = ['punch', 'heavy', 'barrage'];
    const pendingAttack = pendingAction && attackActions.includes(pendingAction) ? pendingAction : null;
    if (!isAnimating && lastEnemyClickId === enemyId && now - lastEnemyClickTime < 380) {
        const actionToConfirm = pendingAttack || 'punch';
        pendingAction = actionToConfirm;
        allowButtonConfirm = true;
        playerAction(actionToConfirm);
    }
    lastEnemyClickId = enemyId;
    lastEnemyClickTime = now;
    
    // Clear all previous selections and previews
    document.querySelectorAll('.enemy-wrapper').forEach(el => {
        el.classList.remove('selected', 'will-break');
    });
    
    // Clear all break previews
    clearBreakPreviews();
    
    const enemyEl = document.getElementById(`enemy-${enemyId}`);
    if (enemyEl) {
        enemyEl.classList.add('selected');
    }
    
    // PHASE 3: Update selection marker visibility
    document.querySelectorAll('.selection-circle').forEach(circle => {
        if (playerTurnActive && circle.parentElement.classList.contains('selected')) {
            circle.style.display = 'block';
        } else {
            circle.style.display = 'none';
        }
    });
    
    // Update break bar preview for ONLY selected enemy (default to punch damage)
    if (playerTurnActive) {
        const currentTurn = getCurrentTurn();
        const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
        const previewDamage = getBreakPreviewDamage(pendingAction || 'punch', enemy, currentPlayer);
        updateBreakPreview(enemyId, previewDamage);
    }
    
    updateButtonStates();
    updateTransformButtons();
}

function updateBreakPreview(enemyId, toughnessDamage) {
    const enemy = enemies.find(e => e.id === enemyId);
    if (!enemy || enemy.hp <= 0 || enemy.isBroken) return;
    
    // Only show preview during player turn AND for selected enemy
    if (!playerTurnActive || selectedEnemy !== enemyId) return;
    
    const enemyWrapper = document.getElementById(`enemy-${enemyId}`);
    if (!enemyWrapper) return;
    
    const breakBarWrapper = enemyWrapper.querySelector('.enemy-break-bar-wrapper');
    if (!breakBarWrapper) return;
    
    // Remove existing preview
    const existingPreview = breakBarWrapper.querySelector('.enemy-break-bar-preview');
    if (existingPreview) {
        existingPreview.remove();
    }
    
    // Calculate current toughness percentage
    const currentToughnessPercent = (enemy.toughness / enemy.maxToughness) * 100;
    
    // If bar is empty, don't show preview
    if (currentToughnessPercent <= 0) return;
    
    const totalDamage = Array.isArray(toughnessDamage)
        ? toughnessDamage.reduce((sum, val) => sum + val, 0)
        : toughnessDamage;

    // Calculate how much damage we can apply to current toughness
    const damageToApply = Math.min(totalDamage, enemy.toughness);
    const damagePercent = (damageToApply / enemy.maxToughness) * 100;
    
    // CAP preview at current toughness - only affect filled portion
    const previewPercent = Math.min(damagePercent, currentToughnessPercent);
    
    // Create preview overlay - starts from right edge of filled bar
    const preview = document.createElement('div');
        preview.className = 'enemy-break-bar-preview';
    const bloodFormActive = team.some(p => p.form === 'blood_lightning');
    if (bloodFormActive) {
        preview.classList.add('blood-break');
    }
    preview.style.width = `${previewPercent}%`;
    // Position it so right edge aligns with current toughness
    preview.style.right = `${100 - currentToughnessPercent}%`;
    breakBarWrapper.appendChild(preview);
    
    // Add red glow if this attack will break the enemy
    // ONLY for selected enemy during player turn
    const afterDamage = Math.max(0, enemy.toughness - totalDamage);
    if (afterDamage <= 0 && !enemy.isBroken && playerTurnActive && selectedEnemy === enemyId) {
        enemyWrapper.classList.add('will-break');
    } else {
        enemyWrapper.classList.remove('will-break');
    }
}

function calculateBreakPreviewDamage(baseToughnessDamage, attacker) {
    let toughnessDamage = baseToughnessDamage;
    if (attacker && attacker.form) {
        const effects = formEffects[attacker.form] || formEffects.base;
        toughnessDamage = Math.floor(toughnessDamage * effects.breakMultiplier);
        if (attacker.form === 'blood_lightning' && attacker.bloodLightningBonus) {
            toughnessDamage = Math.floor(toughnessDamage * (1 + attacker.bloodLightningBonus));
        }
    }
    return toughnessDamage;
}

function getBreakPreviewDamage(actionType, enemy, attacker) {
    if (!enemy) return 0;
    if (actionType === 'heavy') {
        return calculateBreakPreviewDamage(enemy.toughness, attacker);
    }
    if (actionType === 'barrage') {
        const perHit = calculateBreakPreviewDamage(50, attacker);
        return [perHit, perHit, perHit, perHit];
    }
    return calculateBreakPreviewDamage(50, attacker);
}

function clearBreakPreviews() {
    document.querySelectorAll('.enemy-break-bar-preview').forEach(p => p.remove());
    document.querySelectorAll('.enemy-wrapper').forEach(w => w.classList.remove('will-break'));
}

function calculateTurnOrder() {
    const allCombatants = [
        ...team.map(char => ({ ...char, type: 'player' })),
        ...enemies.map(enemy => ({ ...enemy, type: 'enemy' }))
    ];
    
    turnOrder = allCombatants.sort((a, b) => b.speed - a.speed);
}

function setTurnToFirstLivingPlayer() {
    const firstPlayerIndex = turnOrder.findIndex(entity => entity.type === 'player' && entity.hp > 0);
    if (firstPlayerIndex >= 0) {
        currentTurnIndex = firstPlayerIndex;
    } else {
        currentTurnIndex = 0;
    }
}

function renderTurnOrderSidebar() {
    const container = document.getElementById('turnOrderSidebar');
    container.innerHTML = '';
    
    const visibleTurns = 4;
    
    for (let i = 0; i < Math.min(visibleTurns, turnOrder.length); i++) {
        const index = (currentTurnIndex + i) % turnOrder.length;
        const entity = turnOrder[index];
        
        const card = document.createElement('div');
        card.className = `turn-card rank-${i}`;
        card.dataset.index = index;
        
        const isPlayer = entity.type === 'player';
        const bgColor = isPlayer 
            ? `linear-gradient(135deg, ${entity.color}33, ${entity.color}11)`
            : 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.05))';
        
        card.style.background = bgColor;
        
        // PHASE 3: Remove emoji portraits, show only names
        card.innerHTML = `
            <div class="turn-card-name">${entity.name}</div>
            <div class="turn-card-type">${isPlayer ? 'ALLY' : 'FOE'}</div>
        `;
        
        container.appendChild(card);
    }
}

async function advanceTurnWithAnimation() {
    const container = document.getElementById('turnOrderSidebar');
    const cards = Array.from(container.querySelectorAll('.turn-card'));
    
    if (cards.length === 0) return;
    
    cards[0].classList.add('slide-out');
    await sleep(400);
    
    currentTurnIndex++;
    
    renderTurnOrderSidebar();
    
    const newCards = Array.from(container.querySelectorAll('.turn-card'));
    newCards.forEach(card => {
        card.classList.add('move-up');
    });
    
    await sleep(320);
    newCards.forEach(card => {
        card.classList.remove('move-up');
    });
}

function updateSPDisplay() {
    const container = document.getElementById('spDots');
    container.innerHTML = '';
    
    for (let i = 0; i < maxSkillPoints; i++) {
        const icon = document.createElement('img');
        icon.className = `sp-icon ${i < skillPoints ? 'filled' : 'empty'}`;
        icon.src = 'https://i.imgur.com/AV1nEhj.png';
        icon.alt = 'SP';
        container.appendChild(icon);
    }
}

async function startNextWave() {
    enemies = createEnemiesForWave(currentWave);
    selectedEnemy = null;
    currentTurnIndex = 0;

    const enemiesContainer = document.getElementById('enemiesContainer');
    if (enemiesContainer) {
        enemiesContainer.innerHTML = '';
    }

    renderEnemies();
    renderEnemyAnimations();
    calculateTurnOrder();
    setTurnToFirstLivingPlayer();
    renderTurnOrderSidebar();
    updateActiveCharacter();
    updateButtonStates();
    updateTransformButtons();

    // Auto-select first enemy of the new wave
    const nextEnemy = enemies.find(e => e.hp > 0);
    if (nextEnemy) {
        selectEnemy(nextEnemy.id);
    }

    await sleep(600);
}

function getCurrentTurn() {
    return turnOrder[currentTurnIndex % turnOrder.length];
}

// ==================== PHASE 1: PERSPECTIVE & Z-INDEX ====================

// Dynamic z-index based on Y position within each container
// Note: .players-container (z:100) is above .enemies-container (z:20)
// So players will ALWAYS appear above enemies regardless of position
function updateZIndexByPosition() {
    const playerEntities = [];
    const enemyEntities = [];
    
    // Add all players
    team.forEach(player => {
        const el = document.getElementById(`playerChar-${player.id}`);
        if (el) {
            const currentBottom = parseInt(el.style.bottom) || player.position.bottom;
            playerEntities.push({
                el: el,
                bottom: currentBottom,
                id: `player-${player.id}`
            });
        }
    });
    
    // Add all living enemies
    enemies.forEach(e => {
        const el = document.getElementById(`enemy-${e.id}`);
        if (el) {
            const currentBottom = parseInt(el.style.bottom) || e.position.bottom;
            enemyEntities.push({
                el: el,
                bottom: currentBottom,
                id: `enemy-${e.id}`
            });
        }
    });
    
    // Sort each group by bottom value: lower bottom = closer = higher z-index within group
    enemyEntities.sort((a, b) => a.bottom - b.bottom);
    playerEntities.sort((a, b) => a.bottom - b.bottom);
    
    // Assign z-index within their respective containers
    enemyEntities.forEach((entity, index) => {
        if (entity.el) {
            entity.el.style.zIndex = 1 + index;  // 1, 2, 3... within enemy container
        }
    });
    
    playerEntities.forEach((entity, index) => {
        if (entity.el) {
            entity.el.style.zIndex = 1 + index;  // 1, 2, 3... within player container (which is above enemy container)
        }
    });
}

// Perspective scaling based on Y position
function getScaleFromPosition(bottom) {
    const nearBottom = 60;    // Closest to camera (player level)
    const farBottom = 380;    // Furthest from camera (adjusted for very high enemies)
    const nearScale = 1.0;    // Closer = normal size
    const farScale = 0.78;    // Further = moderately smaller (noticeable but not extreme)
    
    const t = Math.max(0, Math.min(1, (bottom - nearBottom) / (farBottom - nearBottom)));
    return nearScale - (t * (nearScale - farScale));
}

function applyPerspectiveScale(element, bottom) {
    const scale = getScaleFromPosition(bottom);
    const spriteEl = element.classList.contains('character')
        ? element.querySelector('img')
        : element.querySelector('.enemy-sprite');
    if (spriteEl) {
        spriteEl.style.transform = `scale(${scale})`;
    }
}

// Throttled z-index update
let zIndexUpdateQueued = false;
function queueZIndexUpdate() {
    if (zIndexUpdateQueued) return;
    zIndexUpdateQueued = true;
    
    requestAnimationFrame(() => {
        updateZIndexByPosition();
        zIndexUpdateQueued = false;
    });
}

function showActionText(text, color = '#FF6B6B') {
    const battlefield = document.getElementById('battlefield');
    if (!battlefield) return;

    if (!currentActionAnnouncement) {
        currentActionAnnouncement = document.createElement('div');
        currentActionAnnouncement.className = 'action-announcement';
        battlefield.appendChild(currentActionAnnouncement);
    }

    currentActionAnnouncement.classList.remove('active');
    void currentActionAnnouncement.offsetWidth;
    currentActionAnnouncement.textContent = text;
    currentActionAnnouncement.style.color = color;

    requestAnimationFrame(() => {
        if (currentActionAnnouncement) {
            currentActionAnnouncement.classList.add('active');
        }
    });
}

function ensureHoverBlurb() {
    if (document.getElementById('hoverBlurb')) return;
    const blurb = document.createElement('div');
    blurb.id = 'hoverBlurb';
    blurb.className = 'hover-blurb';
    document.body.appendChild(blurb);
}

let explanationDefaultText = 'Hover or select anything in the UI to see what it does.';

function setExplanationText(text) {
    const blurb = document.getElementById('hoverBlurb');
    if (!blurb) return;
    blurb.textContent = text || explanationDefaultText;
}

function resetExplanationText() {
    const blurb = document.getElementById('hoverBlurb');
    if (!blurb) return;
    blurb.classList.remove('visible');
    blurb.textContent = '';
}

function setupExplanationForElement(el, text) {
    if (!el) return;
    const message = text;
    const blurb = document.getElementById('hoverBlurb');
    if (!blurb) return;
    const show = (event) => {
        setExplanationText(message);
        const x = event.clientX + 14;
        const y = event.clientY + 14;
        blurb.style.left = `${x}px`;
        blurb.style.top = `${y}px`;
        blurb.classList.add('visible');
    };
    const move = (event) => {
        const x = event.clientX + 14;
        const y = event.clientY + 14;
        blurb.style.left = `${x}px`;
        blurb.style.top = `${y}px`;
    };
    el.addEventListener('mouseenter', show);
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', () => resetExplanationText());
    el.addEventListener('focus', (event) => show(event));
    el.addEventListener('blur', () => resetExplanationText());
}

function setupUIExplanations() {
    const punchBtn = document.getElementById('punchBtn');
    const heavyBtn = document.getElementById('heavyPunchBtn');
    const barrageBtn = document.getElementById('barrageBtn');
    const spDisplay = document.querySelector('.sp-display');
    const lightningBtn = document.getElementById('lightningTransformBtn');
    const blueFireBtn = document.getElementById('blueFireTransformBtn');
    const bloodLightningBtn = document.getElementById('bloodLightningTransformBtn');
    const energyPanel = document.getElementById('energyPanel');
    const healBtn = document.getElementById('healBtn');
    const shieldBtn = document.getElementById('shieldBtn');
    const speedBtn = document.getElementById('speedToggleBtn');

    setupExplanationForElement(punchBtn, 'Punch: free single hit. Builds SP and Energy. Click twice to confirm.');
    setupExplanationForElement(heavyBtn, 'Heavy: costs 1 SP. Big damage and heavy break. Double-tap to confirm.');
    setupExplanationForElement(barrageBtn, 'Barrage: costs 2 SP. Four quick hits that shred broken targets. Double-tap to confirm.');
    setupExplanationForElement(spDisplay, 'SP (Skill Points): spent on Heavy (1) and Barrage (2). You gain SP by attacking.');
    setupExplanationForElement(lightningBtn, 'Lightning Form: +60% damage, +40% break. Locks other paths for that unit.');
    setupExplanationForElement(blueFireBtn, 'Blue Fire Form: +80% damage, +20% break, adds burn. Strengthened Blue Fire: +130% damage, +50% break, stronger burn (24).');
    setupExplanationForElement(bloodLightningBtn, 'Blood Lightning: +120% damage, +100% break, adds bleed. Locks other paths for that unit.');
    setupExplanationForElement(bloodLightningBtn, 'Blood Lightning: +120% damage, +100% break, adds bleed. Devour bonuses: base +0%, lightning +20%, blue fire +30%, strengthened blue fire +50%.');
    setupExplanationForElement(healBtn, 'Heal: spend 1 SP to restore HP to the most injured ally.');
    setupExplanationForElement(shieldBtn, 'Shield: spend 1 SP to grant shield to the most injured ally.');
}
    setupExplanationForElement(speedBtn, 'Speed: toggle between 1x and 2x battle pacing.');

function setKeybindBadges() {
    const badgeMap = [
        { id: 'punchBtn', label: keybinds.punch.label },
        { id: 'heavyPunchBtn', label: keybinds.heavy.label },
        { id: 'barrageBtn', label: keybinds.barrage.label },
        { id: 'healBtn', label: keybinds.heal.label },
        { id: 'shieldBtn', label: keybinds.shield.label },
        { id: 'lightningTransformBtn', label: keybinds.lightning.label },
        { id: 'blueFireTransformBtn', label: keybinds.blue_fire.label },
        { id: 'bloodLightningTransformBtn', label: keybinds.blood_lightning.label }
    ];
    badgeMap.forEach(({ id, label }) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        let badge = btn.querySelector('.keybind-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'keybind-badge';
            btn.appendChild(badge);
        }
        badge.textContent = label;
    });
}

function startKeyHoldHelp(actionKey) {
    const binding = keybinds[actionKey];
    if (!binding) return;
    if (keyboardHelpTimer) return;
    keyboardHelpKey = actionKey;
    keyboardHelpTimer = setTimeout(() => {
        setExplanationText(binding.description);
        const blurb = document.getElementById('hoverBlurb');
        if (blurb) {
            blurb.style.left = '50%';
            blurb.style.top = '50%';
            blurb.style.transform = 'translate(-50%, -50%)';
            blurb.classList.add('visible');
        }
    }, 350);
}

function clearKeyHoldHelp() {
    if (keyboardHelpTimer) {
        clearTimeout(keyboardHelpTimer);
        keyboardHelpTimer = null;
    }
    keyboardHelpKey = null;
    resetExplanationText();
    const blurb = document.getElementById('hoverBlurb');
    if (blurb) {
        blurb.style.left = '';
        blurb.style.top = '';
        blurb.style.transform = '';
    }
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (event) => {
        if (event.repeat) return;
        const key = event.key.toLowerCase();
        const isPlayerTurn = playerTurnActive && !isAnimating;
        lastInputSource = 'keyboard';

        if (['q', 'w', 'e', 'a', 'd', 'z', 'x', 'c'].includes(key)) {
            startKeyHoldHelp(key);
        }

        if (!isPlayerTurn) return;

        if (key === 'arrowright' || key === 'arrowleft') {
            event.preventDefault();
            cycleEnemy(key === 'arrowright' ? 1 : -1);
            return;
        }

        if (key === 'escape') {
            event.preventDefault();
            clearPendingAction();
            return;
        }

        if (key === 'enter' || key === ' ') {
            event.preventDefault();
            if (pendingAction) {
                allowButtonConfirm = true;
                playerAction(pendingAction);
            } else if (selectedEnemy) {
                allowButtonConfirm = true;
                playerAction('punch');
            }
            return;
        }

        const actionMap = {
            w: 'punch',
            q: 'heavy',
            e: 'barrage',
            a: 'heal',
            d: 'shield'
        };
        if (actionMap[key]) {
            event.preventDefault();
        lastInputSource = 'keyboard';
            allowButtonConfirm = false;
            playerAction(actionMap[key]);
            return;
        }

        const formMap = {
            z: 'lightning',
            x: 'blue_fire',
            c: 'blood_lightning'
        };
        if (formMap[key]) {
            event.preventDefault();
            transformAction(formMap[key]);
        }
    });

    document.addEventListener('keyup', (event) => {
        const key = event.key.toLowerCase();
        if (keyboardHelpKey && ['q', 'w', 'e', 'a', 'd', 'z', 'x', 'c'].includes(key)) {
            clearKeyHoldHelp();
        }
    });
}

function cycleEnemy(direction = 1) {
    const living = enemies.filter(e => e.hp > 0);
    if (!living.length) return;
    const currentIndex = living.findIndex(e => e.id === selectedEnemy);
    const nextIndex = currentIndex === -1
        ? 0
        : (currentIndex + direction + living.length) % living.length;
    selectEnemy(living[nextIndex].id);
    if (playerTurnActive) {
        const enemy = enemies.find(e => e.id === selectedEnemy);
        const currentTurn = getCurrentTurn();
        const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
        clearBreakPreviews();
        updateBreakPreview(selectedEnemy, getBreakPreviewDamage(pendingAction || 'punch', enemy, currentPlayer));
    }
}

function initTutorial() {
    const overlay = document.getElementById('tutorialOverlay');
    const panel = document.getElementById('tutorialPanel');
    const body = document.getElementById('tutorialBody');
    const indicator = document.getElementById('tutorialStepIndicator');
    const nextBtn = document.getElementById('tutorialNextBtn');
    const skipBtn = document.getElementById('tutorialSkipBtn');

    if (!overlay || !panel || !body || !indicator || !nextBtn || !skipBtn) return;

    function clearTutorialHighlight() {
        document.querySelectorAll('.tutorial-highlight, .tutorial-highlight-large').forEach(el => {
            el.classList.remove('tutorial-highlight', 'tutorial-highlight-large');
        });
    }

    function applyTutorialHighlight(selector, highlightClass) {
        clearTutorialHighlight();
        if (!selector) return;
        const target = document.querySelector(selector);
        if (target) {
            target.classList.add('tutorial-highlight');
            if (highlightClass) {
                target.classList.add(highlightClass);
            }
        }
    }

    function renderTutorialGoal() {
        const step = tutorialSteps[tutorialStep];
        if (!step || !step.await || !step.await.label) return;
        const existing = document.getElementById('tutorialGoal');
        if (existing) existing.remove();
        const goal = document.createElement('div');
        goal.id = 'tutorialGoal';
        goal.className = 'tutorial-goal';
        goal.innerHTML = `
            <span class="tutorial-goal-status">Pending</span>
            <span class="tutorial-goal-text">${step.await.label}</span>
        `;
        body.appendChild(goal);
    }

    function setTutorialAwait(type, payload = {}) {
        tutorialAwait = { type, ...payload };
        nextBtn.disabled = true;
        nextBtn.textContent = 'Waiting...';
        renderTutorialGoal();
    }

    function clearTutorialAwait() {
        tutorialAwait = null;
        const goal = document.getElementById('tutorialGoal');
        if (goal) goal.remove();
        nextBtn.disabled = false;
        nextBtn.textContent = tutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next';
    }

    function renderTutorialStep() {
        const step = tutorialSteps[tutorialStep];
        if (!step) {
            overlay.classList.add('hidden');
            overlay.classList.remove('active');
            panel.classList.add('hidden');
            tutorialActive = false;
            document.body.classList.remove('tutorial-active');
            clearTutorialHighlight();
            return;
        }
        document.getElementById('tutorialTitle').textContent = step.title;
        body.innerHTML = step.body;
        indicator.textContent = `Step ${tutorialStep + 1} of ${tutorialSteps.length}`;
        nextBtn.textContent = tutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next';

        if (step.highlight) {
            applyTutorialHighlight(step.highlight, step.highlightClass);
        } else {
            clearTutorialHighlight();
        }

        if (step.await) {
            setTutorialAwait(step.await.type, step.await);
        } else {
            clearTutorialAwait();
        }
    }

    skipBtn.onclick = () => {
        overlay.classList.add('hidden');
        overlay.classList.remove('active');
        panel.classList.add('hidden');
        tutorialActive = false;
        document.body.classList.remove('tutorial-active');
        clearTutorialHighlight();
    };

    if (indicator) {
        indicator.style.cursor = 'pointer';
        indicator.title = 'Click to collapse/expand tutorial panel';
        indicator.addEventListener('click', () => {
            panel.classList.toggle('hidden');
        });
    }

    overlay.classList.remove('hidden');
    overlay.classList.add('active');
    panel.classList.remove('hidden');
    tutorialStep = 0;
    tutorialActive = true;
    document.body.classList.add('tutorial-active');
    renderTutorialStep();

    nextBtn.onclick = (event) => {
        event.preventDefault();
        if (nextBtn.disabled) return;
        tutorialStep++;
        if (tutorialStep >= tutorialSteps.length) {
            overlay.classList.add('hidden');
            overlay.classList.remove('active');
            panel.classList.add('hidden');
            tutorialActive = false;
            document.body.classList.remove('tutorial-active');
            clearTutorialHighlight();
        } else {
            renderTutorialStep();
        }
    };
}

function handleTutorialProgress(eventType) {
    if (!tutorialActive || !tutorialAwait) return;
    if (tutorialAwait.type !== eventType) return;
    tutorialAwait = null;
    const nextBtn = document.getElementById('tutorialNextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.textContent = tutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next';
    }
    const goal = document.getElementById('tutorialGoal');
    if (goal) {
        goal.classList.add('complete');
        const status = goal.querySelector('.tutorial-goal-status');
        if (status) status.textContent = 'Complete';
    }
}

// PHASE 3: Enemy telegraph system
function showEnemyTelegraph(enemyName) {
    const telegraph = document.createElement('div');
    telegraph.className = 'enemy-telegraph';
    telegraph.innerHTML = `
        <div class="telegraph-icon">⚠️</div>
        <div class="telegraph-text">${enemyName} preparing to attack!</div>
    `;
    
    document.getElementById('battlefield').appendChild(telegraph);
    
    setTimeout(() => telegraph.remove(), 800);
}

// ==================== ANIMATIONS ====================
function playAnimation(character, animType, loop = false, onComplete = null, frameDuration = 150) {
    // Backwards compatibility - use current turn player
    const currentTurn = getCurrentTurn();
    if (currentTurn && currentTurn.type === 'player') {
        playPlayerAnimation(currentTurn.id, animType, loop, onComplete, frameDuration);
    }
}

function playPlayerAnimation(playerId, animType, loop = false, onComplete = null, frameDuration = 150) {
    const sprite = document.getElementById(`playerSprite-${playerId}`);
    if (!sprite) return;
    
    const player = team.find(p => p.id === playerId);
    const form = player && player.form ? player.form : 'base';
    let animKey = animType;

    if (form !== 'base') {
        const formSpecificKey = `${form}_${animType}`;
        if (animations.player[formSpecificKey]) {
            animKey = formSpecificKey;
        }
    }

    const frames = animations.player[animKey];
    if (!frames || frames.length === 0) return;
    
    if (playerAnimIntervals[playerId]) clearInterval(playerAnimIntervals[playerId]);
    
    let frame = 0;
    sprite.src = frames[0];
    
    const newInterval = setInterval(() => {
        frame++;
        if (frame >= frames.length) {
            if (loop) {
                frame = 0;
            } else {
                clearInterval(newInterval);
                if (onComplete) onComplete();
                return;
            }
        }
        sprite.src = frames[frame];
    }, frameDuration);
    
    playerAnimIntervals[playerId] = newInterval;
    return newInterval;
}

function playEnemyAnimation(enemyId, animType, loop = false, onComplete = null, frameDuration = 150) {
    const sprite = document.getElementById(`enemy-sprite-${enemyId}`);
    if (!sprite) return;
    
    const frames = animations.enemy[animType];
    
    if (enemyAnimIntervals[enemyId]) clearInterval(enemyAnimIntervals[enemyId]);
    
    let frame = 0;
    sprite.src = frames[0];
    
    const newInterval = setInterval(() => {
        frame++;
        if (frame >= frames.length) {
            if (loop) {
                frame = 0;
            } else {
                clearInterval(newInterval);
                if (onComplete) onComplete();
                return;
            }
        }
        sprite.src = frames[frame];
    }, frameDuration);
    
    enemyAnimIntervals[enemyId] = newInterval;
    return newInterval;
}

// ==================== VISUAL EFFECTS ====================
function shakeScreen(intensity = 'normal') {
    const shakeContainer = document.getElementById('shakeContainer');
    shakeContainer.classList.remove('shake', 'shake-critical', 'shake-ultimate');
    void shakeContainer.offsetWidth; // Force reflow
    
    let duration = 400;
    if (intensity === 'critical') {
        shakeContainer.classList.add('shake-critical');
        duration = 600;
    } else if (intensity === 'ultimate') {
        shakeContainer.classList.add('shake-ultimate');
        duration = 800;
    } else {
        shakeContainer.classList.add('shake');
    }
    
    setTimeout(() => {
        shakeContainer.classList.remove('shake', 'shake-critical', 'shake-ultimate');
    }, duration);
}

function flashScreen(isCritical = false) {
    const flash = document.getElementById('hitFlash');
    flash.classList.remove('active', 'critical');
    void flash.offsetWidth;
    
    if (isCritical) {
        flash.classList.add('critical');
    } else {
        flash.classList.add('active');
    }
    
    setTimeout(() => {
        flash.classList.remove('active', 'critical');
    }, isCritical ? 250 : 150);
}

function createHitParticles(x, y, count = 12, type = 'spark') {
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${type}`;
        
        const size = Math.random() * 12 + 4;
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const distance = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 30;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animation = `particleBurst ${0.4 + Math.random() * 0.3}s ease-out forwards`;
        particle.style.animationDelay = Math.random() * 0.1 + 's';
        
        container.appendChild(particle);
    }
    
    setTimeout(() => container.remove(), 1000);
}

function createSlashEffect(x, y, direction = 1) {
    const slash = document.createElement('div');
    slash.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 150px;
        height: 150px;
        background: conic-gradient(from ${direction > 0 ? '0deg' : '180deg'}, 
            transparent 0deg, 
            rgba(255,255,255,0.8) 20deg, 
            rgba(200,220,255,0.6) 40deg, 
            transparent 60deg);
        border-radius: 50%;
        pointer-events: none;
        z-index: 60;
        transform: translate(-50%, -50%) scale(0) rotate(${direction > 0 ? '-45deg' : '45deg'});
        animation: slashAnim 0.3s ease-out forwards;
    `;
    
    document.body.appendChild(slash);
    setTimeout(() => slash.remove(), 300);
}

function showDamage(amount, targetEl, type = 'normal', element = null) {
    // For enemies, get the sprite element instead of wrapper for body positioning
    let positionEl = targetEl;
    if (targetEl.classList && targetEl.classList.contains('enemy-wrapper')) {
        const sprite = targetEl.querySelector('.enemy-sprite');
        if (sprite) positionEl = sprite;
    }
    
    const rect = positionEl.getBoundingClientRect();
    
    const dmgNum = document.createElement('div');
    dmgNum.className = `damage-number ${type}`;
    
    // Apply element color if provided
    if (element && elementColors[element]) {
        dmgNum.style.color = elementColors[element];
    }
    
    if (type === 'critical' || type === 'break-bonus') {
        dmgNum.innerHTML = `${amount}<span style="font-size: 0.5em; display: block;">${type === 'break-bonus' ? 'BROKEN!' : 'CRITICAL!'}</span>`;
    } else if (type === 'weakness') {
        dmgNum.innerHTML = `${amount}<span style="font-size: 0.5em; display: block;">WEAKNESS!</span>`;
    } else {
        dmgNum.textContent = amount;
    }
    
    const offsetX = (Math.random() - 0.5) * 60;
    
    // Position damage numbers at center of sprite
    const yPos = rect.top + rect.height / 2;
    
    dmgNum.style.left = (rect.left + rect.width / 2 + offsetX) + 'px';
    dmgNum.style.top = yPos + 'px';
    
    document.body.appendChild(dmgNum);
    setTimeout(() => dmgNum.remove(), 1200);
}

function showBreakEffect(targetElement) {
    // For enemies, get the sprite element for body positioning
    let positionEl = targetElement;
    if (targetElement.classList && targetElement.classList.contains('enemy-wrapper')) {
        const sprite = targetElement.querySelector('.enemy-sprite');
        if (sprite) positionEl = sprite;
    }
    
    const rect = positionEl.getBoundingClientRect();
    const container = document.createElement('div');
    container.className = 'break-effect';
    container.style.left = (rect.left + rect.width/2) + 'px';
    container.style.top = (rect.top + rect.height/2) + 'px';
    
    // ENHANCED: Increased from 6 to 12 shards for bigger effect
    for (let i = 0; i < 12; i++) {
        const shard = document.createElement('div');
        shard.className = 'break-shard';
        
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 80 + Math.random() * 40; // Larger distance for bigger explosion
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rotation = Math.random() * 720; // More rotation
        
        // Larger shards
        shard.style.width = (20 + Math.random() * 20) + 'px';
        shard.style.height = (25 + Math.random() * 30) + 'px';
        shard.style.setProperty('--tx', tx + 'px');
        shard.style.setProperty('--ty', ty + 'px');
        shard.style.setProperty('--rotation', rotation + 'deg');
        
        container.appendChild(shard);
    }
    
    document.body.appendChild(container);

    
    setTimeout(() => container.remove(), 1200); // Longer duration for bigger effect
}

function showBreakText(enemyName) {
    const text = document.createElement('div');
    text.className = 'break-announcement';
    text.innerHTML = `
        <div class="break-title">WEAKNESS BROKEN!</div>
        <div class="break-subtitle">${enemyName}</div>
    `;
    
    document.getElementById('battlefield').appendChild(text);
    setTimeout(() => text.remove(), 2000);
}

function applyPlayerFormClass(player) {
    const el = document.getElementById(`playerChar-${player.id}`);
    if (!el) return;

    el.classList.remove('form-lightning', 'form-blood-lightning', 'form-blue-fire', 'form-strengthened-blue-fire');

    if (player.form === 'lightning') {
        el.classList.add('form-lightning');
    } else if (player.form === 'blood_lightning') {
        el.classList.add('form-blood-lightning');
    } else if (player.form === 'blue_fire') {
        el.classList.add('form-blue-fire');
    } else if (player.form === 'strengthened_blue_fire') {
        el.classList.add('form-strengthened-blue-fire');
    }

    if (player.form === 'strengthened_blue_fire') {
        const elementsEl = el.querySelector('.player-elements');
        if (elementsEl) {
            elementsEl.innerHTML = `
                ${player.elements.map(elIcon => `<span class="element-icon">${elIcon}</span>`).join('')}
                <span class="element-icon">🔥</span>
            `;
        }
    }
}

// ==================== BREAK SYSTEM ====================
function checkBreak(enemy) {
    if (enemy.toughness <= 0 && !enemy.isBroken) {
        breakEnemy(enemy);
        return true;
    }
    return false;
}

function breakEnemy(enemy) {
    enemy.isBroken = true;
    enemy.breakTurnsRemaining = 2; // PHASE 3: Extended to 2 turns (was 1)
    enemy.toughness = 0;
    enemy.breakDamageMultiplier = 2.0; // PHASE 3: Increased from 1.5 to 2.0
    
    const wrapper = document.getElementById(`enemy-${enemy.id}`);
    wrapper.classList.add('broken');
    
    // Lower enemy to ground when broken - INCREASED TO 100px
    const sprite = wrapper.querySelector('.enemy-sprite');
    sprite.style.transform = 'translateY(100px)';
    sprite.style.transition = 'transform 0.5s ease-out';
    
    showBreakEffect(wrapper);
    showBreakText(enemy.name);
    shakeScreen('ultimate');
    playSfx('hit');
    
    playEnemyAnimation(enemy.id, 'breaking', false, () => {
        playEnemyAnimation(enemy.id, 'broken', false);
    }, 100);
    
    updateEnemyDisplay(enemy.id);
}

function recoverFromBreak(enemy) {
    enemy.isBroken = false;
    enemy.toughness = enemy.maxToughness;
    
    const wrapper = document.getElementById(`enemy-${enemy.id}`);
    wrapper.classList.remove('broken');
    
    // Restore enemy position
    const sprite = wrapper.querySelector('.enemy-sprite');
    sprite.style.transform = '';
    
    playEnemyAnimation(enemy.id, 'recovery', false, () => {
        playEnemyAnimation(enemy.id, 'idle', true, null, 150);
    }, 120);
    
    updateEnemyDisplay(enemy.id);
}

function applyDamageOverTime(target) {
    if (target.burn && target.burn.turns > 0) {
        const burnDamage = target.burn.stacks;
        target.hp = Math.max(0, target.hp - burnDamage);
        showActionText(`BURN -${burnDamage}`, '#38bdf8');
        target.burn.turns -= 1;
        if (target.burn.turns <= 0) target.burn = null;
    }
    if (target.bleed && target.bleed.turns > 0) {
        const bleedDamage = target.bleed.stacks;
        target.hp = Math.max(0, target.hp - bleedDamage);
        showActionText(`BLEED -${bleedDamage}`, '#ef4444');
        target.bleed.turns -= 1;
        if (target.bleed.turns <= 0) target.bleed = null;
    }
}

function calculateDamage(baseDamage, target, attacker) {
    let damage = baseDamage;

    if (target.isBroken) {
        damage = Math.floor(damage * target.breakDamageMultiplier); // Now 2.0x
    }

    // Element weakness bonus - check if attacker's element matches enemy weakness
    if (attacker && attacker.elements && target.weaknesses) {
        const hasWeakness = attacker.elements.some(el => target.weaknesses.includes(el));
        if (hasWeakness) {
            damage = Math.floor(damage * 1.5); // 50% bonus damage on weakness
        }
    }

    // Transformation form damage bonuses
    if (attacker && attacker.form) {
        const effects = formEffects[attacker.form] || formEffects.base;
        damage = Math.floor(damage * effects.damageMultiplier);
        if (attacker.form === 'blood_lightning' && attacker.bloodLightningBonus) {
            damage = Math.floor(damage * (1 + attacker.bloodLightningBonus));
        }
    }

    return damage;
}

function calculateBreakDamage(baseToughnessDamage, target, attacker) {
    let toughnessDamage = baseToughnessDamage;
    if (attacker && attacker.form) {
        const effects = formEffects[attacker.form] || formEffects.base;
        toughnessDamage = Math.floor(toughnessDamage * effects.breakMultiplier);
        if (attacker.form === 'blood_lightning' && attacker.bloodLightningBonus) {
            toughnessDamage = Math.floor(toughnessDamage * (1 + attacker.bloodLightningBonus));
        }
    }

    const overkill = Math.max(0, toughnessDamage - target.toughness);
    if (overkill > 0) {
        const bonus = Math.floor(overkill * 0.5);
        toughnessDamage += bonus;
    }

    return toughnessDamage;
}

function applyStatusEffects(target, attacker) {
    if (!attacker || !attacker.form) return;
    const effects = formEffects[attacker.form] || formEffects.base;
    if (effects.burn) {
        target.burn = { stacks: (target.burn?.stacks || 0) + effects.burn, turns: 3 };
    }
    if (effects.bleed) {
        target.bleed = { stacks: (target.bleed?.stacks || 0) + effects.bleed, turns: 3 };
    }
}

// ==================== CINEMATIC SYSTEM ====================
let cinematicActive = false;

function applyCinematicFocus(attackerId, attackerType, targetIds, targetType) {
    const battlefield = document.getElementById('battlefield');
    const uiBottom = document.querySelector('.ui-bottom');
    const turnOrderSidebar = document.getElementById('turnOrderSidebar');
    if (!battlefield) return;

    // Clear any previous cinematic state
    document.querySelectorAll('.cinematic-fade, .cinematic-focus').forEach(el => {
        el.classList.remove('cinematic-fade', 'cinematic-focus');
        el.style.opacity = '';
        el.style.filter = '';
    });

    const battlefieldRect = battlefield.getBoundingClientRect();

    const resolveElement = (type, id) => {
        if (type === 'player') {
            return document.getElementById(`playerChar-${id}`);
        }
        const wrapper = document.getElementById(`enemy-${id}`);
        if (!wrapper) return null;
        return wrapper.querySelector('.enemy-sprite') || wrapper;
    };

    let focusElement = null;
    if (targetType && Array.isArray(targetIds) && targetIds.length > 0) {
        focusElement = resolveElement(targetType, targetIds[0]);
    }
    if (!focusElement && attackerType && attackerId != null) {
        focusElement = resolveElement(attackerType, attackerId);
    }

    if (focusElement) {
        const rect = focusElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const xPercent = ((centerX - battlefieldRect.left) / battlefieldRect.width) * 100;
        const yPercent = ((centerY - battlefieldRect.top) / battlefieldRect.height) * 100;
        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
        const focusX = clamp(xPercent + (attackerType === 'player' ? 6 : -6), 12, 88);
        const focusY = clamp(yPercent + (attackerType === 'player' ? 4 : -4), 12, 88);
        battlefield.style.transformOrigin = `${focusX}% ${focusY}%`;
    } else {
        battlefield.style.transformOrigin = '50% 50%';
    }

    if (cinematicActive) {
        return;
    }

    // Apply zoom
    battlefield.classList.add('cinematic-active');
    if (uiBottom) {
        uiBottom.classList.add('cinematic-hidden');
    }
    if (turnOrderSidebar) {
        turnOrderSidebar.classList.add('cinematic-hidden');
    }

    const allPlayers = Array.from(document.querySelectorAll('.character'));
    const allEnemies = Array.from(document.querySelectorAll('.enemy-wrapper'));

    allPlayers.forEach(el => {
        const id = parseInt(el.id.replace('playerChar-', ''));
        const isAttacker = attackerType === 'player' && id === attackerId;
        const isTarget = targetType === 'player' && targetIds && targetIds.includes(id);
        if (isAttacker || isTarget) {
            el.classList.add('cinematic-focus');
        } else {
            el.classList.add('cinematic-fade');
        }
    });

    allEnemies.forEach(el => {
        const id = parseInt(el.id.replace('enemy-', ''));
        const isTarget = targetType === 'enemy' && targetIds && targetIds.includes(id);
        const isAttacker = attackerType === 'enemy' && id === attackerId;
        if (isAttacker || isTarget) {
            el.classList.add('cinematic-focus');
        } else {
            el.classList.add('cinematic-fade');
        }
    });

    cinematicActive = true;
}

async function startCinematic(attackerId, attackerType, targetIds, targetType) {
    applyCinematicFocus(attackerId, attackerType, targetIds, targetType);
    await sleep(900);
}

async function endCinematic() {
    try {
        const battlefield = document.getElementById('battlefield');
        
        const uiBottom = document.querySelector('.ui-bottom');
        // Remove all cinematic classes
        document.querySelectorAll('.cinematic-fade, .cinematic-focus').forEach(el => {
            el.classList.remove('cinematic-fade', 'cinematic-focus');
        });
        
        // Zoom out battlefield
        battlefield.classList.remove('cinematic-active');
        
        if (uiBottom) {
            await sleep(180);
            uiBottom.classList.remove('cinematic-hidden');
        }
        if (turnOrderSidebar) {
            turnOrderSidebar.classList.remove('cinematic-hidden');
        }
        // FIXED: Longer wait for smooth zoom out (0.8s)
        await sleep(900); // Wait for restore animation to complete smoothly
        battlefield.style.transformOrigin = '50% 50%';
    } catch (error) {
        console.error('Cinematic cleanup error:', error);
    } finally {
        // ALWAYS runs - defensive cleanup
        cinematicActive = false;
        
        // Force reset all styles in case of errors
        document.querySelectorAll('.character, .enemy-wrapper').forEach(el => {
            el.classList.remove('cinematic-fade', 'cinematic-focus');
            el.style.opacity = '';
            el.style.filter = '';
        });
        
        const battlefield = document.getElementById('battlefield');
        if (battlefield) {
            battlefield.classList.remove('cinematic-active');
            battlefield.style.transformOrigin = '50% 50%';
        }
        const uiBottom = document.querySelector('.ui-bottom');
        if (uiBottom) {
            await sleep(180);
            uiBottom.classList.remove('cinematic-hidden');
        }
        if (turnOrderSidebar) {
            turnOrderSidebar.classList.remove('cinematic-hidden');
        }
    }
}

// ==================== COMBAT ====================
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms / gameSpeed));
}

async function performPunch() {
    console.log('performPunch called, selectedEnemy:', selectedEnemy);
    
    if (!selectedEnemy) {
        showActionText('SELECT TARGET!', '#ef4444');
        console.log('No enemy selected');
        return false;
    }

    const currentChar = getCurrentTurn();
    const playerChar = document.getElementById(`playerChar-${currentChar.id}`); // Get current player sprite
    const playerData = team.find(p => p.id === currentChar.id);
    const PLAYER_START_LEFT = playerData.position.left;
    const PLAYER_START_BOTTOM = playerData.position.bottom;
    
    const targetEnemy = enemies.find(e => e.id === selectedEnemy);
    if (!targetEnemy || targetEnemy.hp <= 0) return false;
    
    console.log('Target enemy:', targetEnemy);
    
    if (!targetEnemy || targetEnemy.hp <= 0) {
        showActionText('INVALID TARGET!', '#ef4444');
        console.log('Invalid target');
        return false;
    }

    handleTutorialProgress('confirm_attack');
    
    clearBreakPreviews();  // Clear preview before attacking

    console.log('Starting attack sequence...');
    
    const battlefield = document.querySelector('.battlefield');
    const enemyWrapper = document.getElementById(`enemy-${selectedEnemy}`);
    
    showActionText('PUNCH!', currentChar.color);
    playSfx('hit');
    
    const enemyRect = enemyWrapper.getBoundingClientRect();
    const battlefieldRect = battlefield.getBoundingClientRect();
    
    // Get sprite rect for particle effects (on body, not HP bars)
    const enemySprite = enemyWrapper.querySelector('.enemy-sprite');
    const spriteRect = enemySprite ? enemySprite.getBoundingClientRect() : enemyRect;
    
    const playerRect = playerChar.getBoundingClientRect();
    const targetX = enemyRect.left - battlefieldRect.left - playerRect.width * 0.4;
    
    let targetBottom = Math.max(0, targetEnemy.position.bottom - 30);
    
    const strideDistance = 100;
    const strideDuration = 120;
    
    playPlayerAnimation(currentChar.id, 'run', true, null, 90);

    applyCinematicFocus(currentChar.id, 'player', [selectedEnemy], 'enemy');
    
    let currentX = PLAYER_START_LEFT;
    let currentBottom = PLAYER_START_BOTTOM;
    const totalDistance = targetX - PLAYER_START_LEFT;
    const steps = Math.ceil(Math.abs(totalDistance) / strideDistance);
    const bottomStep = (targetBottom - PLAYER_START_BOTTOM) / steps;
    
    // Movement happens while zoom is transitioning
    for (let i = 0; i < steps; i++) {
        currentX += strideDistance;
        currentBottom += bottomStep;
        
        if (currentX > targetX) currentX = targetX;
        if (Math.abs(currentBottom - targetBottom) < Math.abs(bottomStep)) currentBottom = targetBottom;
        
        playerChar.style.transition = `left ${strideDuration}ms linear, bottom ${strideDuration}ms linear`;
        playerChar.style.left = currentX + 'px';
        playerChar.style.bottom = currentBottom + 'px';
        
        // Apply perspective and update z-index
        applyPerspectiveScale(playerChar, currentBottom);
        queueZIndexUpdate();
        
        await sleep(strideDuration);
    }
    
    // Stop running and switch to idle
    playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
    
    // Wait for zoom transition to complete fully (0.8s = 800ms)
    await sleep(900);
    
    let baseDamage = Math.floor(Math.random() * 20) + 15;
    const isCrit = Math.random() < 0.2;
    if (isCrit) baseDamage = Math.floor(baseDamage * 1.8);
    
    // playerData already declared above - use it for damage calculation
    let damage = calculateDamage(baseDamage, targetEnemy, playerData);
    
    // Check if weakness hit
    const isWeakness = playerData && playerData.elements && 
                      playerData.elements.some(el => targetEnemy.weaknesses.includes(el));
    
    playPlayerAnimation(currentChar.id, 'attack', false, () => {
        playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
    }, 80);
    
    await sleep(420);
    
    shakeScreen(isCrit ? 'critical' : 'normal');

    // FIXED: Recalculate sprite position for accurate hit effect placement
    const currentEnemySprite = enemyWrapper.querySelector('.enemy-sprite');
    const currentSpriteRect = currentEnemySprite ? currentEnemySprite.getBoundingClientRect() : enemyWrapper.getBoundingClientRect();
    
    createHitParticles(
        currentSpriteRect.left + currentSpriteRect.width / 2,
        currentSpriteRect.top + currentSpriteRect.height / 2,
        isCrit ? 20 : 12,
        'spark'
    );
    
    createSlashEffect(
        currentSpriteRect.left + currentSpriteRect.width / 2,
        currentSpriteRect.top + currentSpriteRect.height / 2,
        1
    );
    
    if (targetEnemy.isBroken) {
        // Broken enemy stays in broken frame
    } else {
        playEnemyAnimation(selectedEnemy, 'hit', false, () => {
            playEnemyAnimation(selectedEnemy, 'idle', true, null, 150);
        });
    }
    
    // Determine damage type and element
    let damageType = 'normal';
    if (targetEnemy.isBroken) {
        damageType = 'break-bonus';
    } else if (isCrit) {
        damageType = 'critical';
    } else if (isWeakness) {
        damageType = 'weakness';
    }
    
    const element = playerData && playerData.elements ? playerData.elements[0] : null;
    await sleep(80);
    showDamage(damage, enemyWrapper, damageType, element);
    
    const breakDamage = calculateBreakDamage(50, targetEnemy, playerData);
    targetEnemy.hp = Math.max(0, targetEnemy.hp - damage);
    targetEnemy.toughness = Math.max(0, targetEnemy.toughness - breakDamage);
    
    applyStatusEffects(targetEnemy, playerData);
    updateEnemyDisplay(selectedEnemy);
    checkBreak(targetEnemy);
    
    sharedEnergy = Math.min(playerData.maxEnergy, sharedEnergy + energyGain.punch);
    skillPoints = Math.min(maxSkillPoints, skillPoints + 1);
    
    // Wait to enjoy hit effects before returning
    await sleep(380);
    
    // Return to starting position
    playerChar.style.transition = 'left 0.6s ease-out, bottom 0.6s ease-out';
    playerChar.style.left = PLAYER_START_LEFT + 'px';
    playerChar.style.bottom = PLAYER_START_BOTTOM + 'px';
    
    // Reset perspective
    applyPerspectiveScale(playerChar, PLAYER_START_BOTTOM);
    queueZIndexUpdate();
    
    // Wait for return journey to complete
    await sleep(420);
    
    // Wait extra time to ensure all particles/effects finish before unzoom
    await sleep(260);
    
    // END CINEMATIC - Now all effects are done
    await endCinematic();
    
    return true;
}

async function performHeavyPunch() {
    if (!selectedEnemy) {
        showActionText('SELECT TARGET!', '#ef4444');
        return false;
    }

    skillPoints--;
    updateSPDisplay();
    updateButtonStates();
    
    const currentChar = getCurrentTurn();
    const playerChar = document.getElementById(`playerChar-${currentChar.id}`); // Get current player sprite
    const playerData = team.find(p => p.id === currentChar.id);
    const PLAYER_START_LEFT = playerData.position.left;
    const PLAYER_START_BOTTOM = playerData.position.bottom;
    
    const targetEnemy = enemies.find(e => e.id === selectedEnemy);
    
    if (!targetEnemy || targetEnemy.hp <= 0) return false;

    handleTutorialProgress('confirm_attack');
    
    clearBreakPreviews();  // Clear preview before attacking
    
    const battlefield = document.querySelector('.battlefield');
    const enemyWrapper = document.getElementById(`enemy-${selectedEnemy}`);
    
    showActionText('HEAVY PUNCH!', '#8b5cf6');
    playSfx('hit');
    const enemyRect = enemyWrapper.getBoundingClientRect();
    const battlefieldRect = battlefield.getBoundingClientRect();
    
    // Get sprite rect for particle effects (on body, not HP bars)
    const enemySprite = enemyWrapper.querySelector('.enemy-sprite');
    const spriteRect = enemySprite ? enemySprite.getBoundingClientRect() : enemyRect;
    
    const playerRect = playerChar.getBoundingClientRect();
    const targetX = enemyRect.left - battlefieldRect.left - playerRect.width * 0.4;
    let targetBottom = Math.max(0, targetEnemy.position.bottom - 30);
    
    const strideDistance = 100;
    const strideDuration = 120;
    
    playPlayerAnimation(currentChar.id, 'run', true, null, 90);

    applyCinematicFocus(currentChar.id, 'player', [selectedEnemy], 'enemy');
    
    let currentX = PLAYER_START_LEFT;
    let currentBottom = PLAYER_START_BOTTOM;
    const totalDistance = targetX - PLAYER_START_LEFT;
    const steps = Math.ceil(Math.abs(totalDistance) / strideDistance);
    const bottomStep = (targetBottom - PLAYER_START_BOTTOM) / steps;
    
    // Movement happens while zoom is transitioning
    for (let i = 0; i < steps; i++) {
        currentX += strideDistance;
        currentBottom += bottomStep;
        
        if (currentX > targetX) currentX = targetX;
        if (Math.abs(currentBottom - targetBottom) < Math.abs(bottomStep)) currentBottom = targetBottom;
        
        playerChar.style.transition = `left ${strideDuration}ms linear, bottom ${strideDuration}ms linear`;
        playerChar.style.left = currentX + 'px';
        playerChar.style.bottom = currentBottom + 'px';
        
        // Apply perspective and update z-index
        applyPerspectiveScale(playerChar, currentBottom);
        queueZIndexUpdate();
        
        await sleep(strideDuration);
    }
    
    // Stop running and switch to idle
    playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
    
    // Wait for zoom transition to complete fully (0.8s = 800ms)
    await sleep(900);
    
    let baseDamage = Math.floor(Math.random() * 25) + 20;
    const isCrit = Math.random() < 0.25;
    if (isCrit) baseDamage = Math.floor(baseDamage * 2);
    
    // Get player data for element damage
    const attackerData = team.find(char => char.id === currentChar.id);
    let damage = calculateDamage(baseDamage, targetEnemy, attackerData);
    
    // Check if weakness hit
    const isWeakness = attackerData && attackerData.elements && 
                      attackerData.elements.some(el => targetEnemy.weaknesses.includes(el));
    
    playPlayerAnimation(currentChar.id, 'attack', false, () => {
        playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
    }, 80);
    
    await sleep(420);
    
    shakeScreen('critical');

    // FIXED: Recalculate sprite position for accurate hit effect placement
    const currentEnemySprite = enemyWrapper.querySelector('.enemy-sprite');
    const currentSpriteRect = currentEnemySprite ? currentEnemySprite.getBoundingClientRect() : enemyWrapper.getBoundingClientRect();
    
    createHitParticles(
        currentSpriteRect.left + currentSpriteRect.width / 2,
        currentSpriteRect.top + currentSpriteRect.height / 2,
        30,
        'spark'
    );
    
    createSlashEffect(
        currentSpriteRect.left + currentSpriteRect.width / 2,
        currentSpriteRect.top + currentSpriteRect.height / 2,
        1
    );
    
    if (targetEnemy.isBroken) {
        // Stay in broken frame
    } else {
        playEnemyAnimation(selectedEnemy, 'hit', false, () => {
            playEnemyAnimation(selectedEnemy, 'idle', true, null, 150);
        });
    }
    
    targetEnemy.hp = Math.max(0, targetEnemy.hp - damage);
    
    const wasNotBroken = !targetEnemy.isBroken;
    const breakDamage = calculateBreakDamage(targetEnemy.toughness, targetEnemy, attackerData);
    targetEnemy.toughness = Math.max(0, targetEnemy.toughness - breakDamage);
    
    applyStatusEffects(targetEnemy, attackerData);
    updateEnemyDisplay(selectedEnemy);
    
    if (wasNotBroken) {
        checkBreak(targetEnemy);
    }
    
    let damageType = 'normal';
    if (targetEnemy.isBroken) {
        damageType = 'break-bonus';
    } else if (isCrit) {
        damageType = 'critical';
    } else if (isWeakness) {
        damageType = 'weakness';
    }
    
    const element = attackerData && attackerData.elements ? attackerData.elements[0] : null;
    await sleep(80);
    showDamage(damage, enemyWrapper, damageType, element);
    
    sharedEnergy = Math.min(attackerData.maxEnergy, sharedEnergy + energyGain.heavy);
    
    // Wait to enjoy hit effects before returning
    await sleep(420);
    
    // Return to starting position
    playerChar.style.transition = 'left 0.6s ease-out, bottom 0.6s ease-out';
    playerChar.style.left = PLAYER_START_LEFT + 'px';
    playerChar.style.bottom = PLAYER_START_BOTTOM + 'px';
    
    // Reset perspective
    applyPerspectiveScale(playerChar, PLAYER_START_BOTTOM);
    queueZIndexUpdate();
    
    // Wait for return journey to complete
    await sleep(420);
    
    // Wait extra time to ensure all particles/effects finish before unzoom
    await sleep(260);
    
    // END CINEMATIC
    await endCinematic();
    
    return true;
}

async function performPunchBarrage() {
    if (!selectedEnemy) {
        showActionText('SELECT TARGET!', '#ef4444');
        return false;
    }

    // Check if player has 2 SP
    if (skillPoints < 2) {
        showActionText('NOT ENOUGH SP!', '#ef4444');
        return false;
    }

    skillPoints -= 2;
    updateSPDisplay();
    updateButtonStates();
    
    const currentChar = getCurrentTurn();
    const playerChar = document.getElementById(`playerChar-${currentChar.id}`); // Get current player sprite
    const playerData = team.find(p => p.id === currentChar.id);
    const PLAYER_START_LEFT = playerData.position.left;
    const PLAYER_START_BOTTOM = playerData.position.bottom;
    
    const targetEnemy = enemies.find(e => e.id === selectedEnemy);
    
    if (!targetEnemy || targetEnemy.hp <= 0) return false;

    handleTutorialProgress('confirm_attack');
    
    clearBreakPreviews();  // Clear preview before attacking
    
    const battlefield = document.querySelector('.battlefield');
    const enemyWrapper = document.getElementById(`enemy-${selectedEnemy}`);
    
    showActionText('PUNCH BARRAGE!', '#f59e0b');
    playSfx('hit');
    const enemyRect = enemyWrapper.getBoundingClientRect();
    const battlefieldRect = battlefield.getBoundingClientRect();
    
    // Get sprite rect for particle effects (on body, not HP bars)
    const enemySprite = enemyWrapper.querySelector('.enemy-sprite');
    const spriteRect = enemySprite ? enemySprite.getBoundingClientRect() : enemyRect;
    
    const playerRect = playerChar.getBoundingClientRect();
    const targetX = enemyRect.left - battlefieldRect.left - playerRect.width * 0.4;
    let targetBottom = Math.max(0, targetEnemy.position.bottom - 30);
    
    const strideDistance = 100;
    const strideDuration = 120;
    
    playPlayerAnimation(currentChar.id, 'run', true, null, 90);

    applyCinematicFocus(currentChar.id, 'player', [selectedEnemy], 'enemy');
    
    let currentX = PLAYER_START_LEFT;
    let currentBottom = PLAYER_START_BOTTOM;
    const totalDistance = targetX - PLAYER_START_LEFT;
    const steps = Math.ceil(Math.abs(totalDistance) / strideDistance);
    const bottomStep = (targetBottom - PLAYER_START_BOTTOM) / steps;
    
    // Movement happens while zoom is transitioning
    for (let i = 0; i < steps; i++) {
        currentX += strideDistance;
        currentBottom += bottomStep;
        
        if (currentX > targetX) currentX = targetX;
        if (Math.abs(currentBottom - targetBottom) < Math.abs(bottomStep)) currentBottom = targetBottom;
        
        playerChar.style.transition = `left ${strideDuration}ms linear, bottom ${strideDuration}ms linear`;
        playerChar.style.left = currentX + 'px';
        playerChar.style.bottom = currentBottom + 'px';
        
        applyPerspectiveScale(playerChar, currentBottom);
        queueZIndexUpdate();
        
        await sleep(strideDuration);
    }
    
    // Stop running and switch to idle
    playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
    
    // Wait for zoom transition to complete fully (0.8s = 800ms)
    await sleep(900);
    
    // Perform 4 quick punches
    const barrageAttacker = team.find(char => char.id === currentChar.id);
    
    for (let punchNum = 1; punchNum <= 4; punchNum++) {
        let baseDamage = Math.floor(Math.random() * 15) + 10; // Smaller damage per hit
        const isCrit = Math.random() < 0.15;
        if (isCrit) baseDamage = Math.floor(baseDamage * 1.8);
        
        let damage = calculateDamage(baseDamage, targetEnemy, barrageAttacker);
        
        // Check if weakness hit
        const isWeakness = barrageAttacker && barrageAttacker.elements && 
                          barrageAttacker.elements.some(el => targetEnemy.weaknesses.includes(el));
        
        playPlayerAnimation(currentChar.id, 'attack', false, () => {
            playPlayerAnimation(currentChar.id, 'idle', true, null, 150);
        }, 110);

        // Let the full attack animation (all frames) play before the next hit
        await sleep(520);
        
        shakeScreen(isCrit ? 'critical' : 'normal');
        
        // FIXED: Recalculate sprite position for each punch for accurate hit effect placement
        const currentEnemySprite = enemyWrapper.querySelector('.enemy-sprite');
        const currentSpriteRect = currentEnemySprite ? currentEnemySprite.getBoundingClientRect() : enemyWrapper.getBoundingClientRect();
        
        createHitParticles(
            currentSpriteRect.left + currentSpriteRect.width / 2,
            currentSpriteRect.top + currentSpriteRect.height / 2,
            isCrit ? 15 : 8,
            'spark'
        );
        
        if (punchNum === 4) {
            createSlashEffect(
                currentSpriteRect.left + currentSpriteRect.width / 2,
                currentSpriteRect.top + currentSpriteRect.height / 2,
                1
            );
        }
        
        if (targetEnemy.isBroken) {
            // Stay in broken frame
        } else {
            playEnemyAnimation(selectedEnemy, 'hit', false, () => {
                playEnemyAnimation(selectedEnemy, 'idle', true, null, 150);
            });
        }
        
        let damageType = 'normal';
        if (targetEnemy.isBroken) {
            damageType = 'break-bonus';
        } else if (isCrit) {
            damageType = 'critical';
        } else if (isWeakness) {
            damageType = 'weakness';
        }
        
        const element = barrageAttacker && barrageAttacker.elements ? barrageAttacker.elements[0] : null;
        await sleep(60);
        showDamage(damage, enemyWrapper, damageType, element);
        
        const breakDamage = calculateBreakDamage(50, targetEnemy, barrageAttacker);
        targetEnemy.hp = Math.max(0, targetEnemy.hp - damage);
        targetEnemy.toughness = Math.max(0, targetEnemy.toughness - breakDamage); // Full toughness damage per hit
        
        applyStatusEffects(targetEnemy, barrageAttacker);
        updateEnemyDisplay(selectedEnemy);
        
        // Check for break after each hit
        if (punchNum < 4) {
            checkBreak(targetEnemy);
        }
        
        await sleep(160); // Short delay between punches
        
        // Stop if enemy dies
        if (targetEnemy.hp <= 0) break;
    }
    
    // Final break check
    checkBreak(targetEnemy);
    
    sharedEnergy = Math.min(barrageAttacker.maxEnergy, sharedEnergy + energyGain.barrage);
    
    // Wait to enjoy final hit effects
    await sleep(460);
    
    // Return to starting position
    playerChar.style.transition = 'left 0.6s ease-out, bottom 0.6s ease-out';
    playerChar.style.left = PLAYER_START_LEFT + 'px';
    playerChar.style.bottom = PLAYER_START_BOTTOM + 'px';
    
    // Reset perspective
    applyPerspectiveScale(playerChar, PLAYER_START_BOTTOM);
    queueZIndexUpdate();
    
    // Wait for return journey to complete
    await sleep(420);
    
    // Wait extra time to ensure all particles/effects finish before unzoom
    await sleep(260);
    
    // END CINEMATIC
    await endCinematic();
    
    return true;
}

async function performHeal() {
    if (skillPoints < 1) {
        showActionText('NOT ENOUGH SP!', '#ef4444');
        return false;
    }

    const currentChar = getCurrentTurn();
    const healer = team.find(p => p.id === currentChar.id);
    if (!healer) return false;

    const target = pendingAllyAction ? team.find(p => p.id === pendingAllyAction) : null;
    if (!target || target.hp <= 0) {
        showActionText('SELECT AN ALLY', '#fbbf24');
        pendingAction = 'heal';
        pendingAllyAction = null;
        highlightAllyTargets(healer.id);
        return false;
    }

    const healAmount = Math.min(35, target.maxHp - target.hp);
    if (healAmount <= 0) {
        showActionText('NO HEAL NEEDED!', '#9ca3af');
        pendingAllyAction = null;
        clearAllyTargets();
        return false;
    }

    skillPoints--;
    updateSPDisplay();
    updateButtonStates();

    pendingAllyAction = null;
    clearAllyTargets();

    const targetEl = document.getElementById(`char-${target.id}`);
    if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        createHitParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 16, 'spark');
    }
    showActionText(`HEAL +${healAmount}`, '#34d399');
    playSfx('hit');
    target.hp += healAmount;
    updateCharacterDisplay();
    handleTutorialProgress('confirm_attack');
    await sleep(360);
    return true;
}

async function performShield() {
    if (skillPoints < 1) {
        showActionText('NOT ENOUGH SP!', '#ef4444');
        return false;
    }

    const currentChar = getCurrentTurn();
    const shielder = team.find(p => p.id === currentChar.id);
    if (!shielder) return false;

    const target = pendingAllyAction ? team.find(p => p.id === pendingAllyAction) : null;
    if (!target || target.hp <= 0) {
        showActionText('SELECT AN ALLY', '#fbbf24');
        pendingAction = 'shield';
        pendingAllyAction = null;
        highlightAllyTargets(shielder.id);
        return false;
    }

    const shieldAmount = Math.min(30, target.maxShield - target.shield);
    if (shieldAmount <= 0) {
        showActionText('SHIELD FULL!', '#9ca3af');
        pendingAllyAction = null;
        clearAllyTargets();
        return false;
    }

    skillPoints--;
    updateSPDisplay();
    updateButtonStates();

    pendingAllyAction = null;
    clearAllyTargets();

    const targetEl = document.getElementById(`char-${target.id}`);
    if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        createHitParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 16, 'spark');
    }
    showActionText(`SHIELD +${shieldAmount}`, '#60a5fa');
    playSfx('hit');
    target.shield += shieldAmount;
    updateCharacterDisplay();
    handleTutorialProgress('confirm_attack');
    await sleep(360);
    return true;
}

async function performEnemyAttack(enemyId) {
    const enemy = enemies.find(e => e.id === enemyId);
    if (!enemy || enemy.hp <= 0) return false;

    const enemyWrapper = document.getElementById(`enemy-${enemyId}`);
    
    // Select random living player as target
    const livingPlayers = team.filter(p => p.hp > 0);
    if (livingPlayers.length === 0) return false;
    
    const targetPlayer = livingPlayers[Math.floor(Math.random() * livingPlayers.length)];
    const targetPlayerChar = document.getElementById(`playerChar-${targetPlayer.id}`);
    
    if (!targetPlayerChar) return false;
    
    // PHASE 3: Show telegraph banner
    showEnemyTelegraph(enemy.name);
    await sleep(800); // Telegraph duration
    
    const originalRight = enemy.originalPosition.right;
    const originalBottom = enemy.originalPosition.bottom;
    
    // Get target player's CURRENT position (accounting for any movement)
    const playerRect = targetPlayerChar.getBoundingClientRect();
    const battlefield = document.querySelector('.battlefield');
    const battlefieldRect = battlefield.getBoundingClientRect();
    
    // Calculate player bottom from DOM - this is the actual current position
    const currentPlayerBottom = parseInt(targetPlayerChar.style.bottom) || targetPlayer.position.bottom;
    
    const targetRight = battlefieldRect.right - playerRect.right - playerRect.width * 0.35;
    
    // FIX: Enemy should go all the way down to player's Y position
    let targetBottom = Math.max(0, currentPlayerBottom + 20);
    
    // Add just a tiny offset if enemy is much higher up
    if (originalBottom > currentPlayerBottom + 100) {
        targetBottom = currentPlayerBottom + 25; // Slight elevation for visual effect
    }
    
    const strideDistance = 100;
    const strideDuration = 120;
    
    playEnemyAnimation(enemyId, 'run', true, null, 90);

    applyCinematicFocus(enemyId, 'enemy', [targetPlayer.id], 'player');
    
    let currentRight = originalRight;
    let currentBottom = originalBottom;
    
    const totalDistance = Math.abs(targetRight - originalRight);
    const steps = Math.ceil(totalDistance / strideDistance);
    const bottomStep = (targetBottom - originalBottom) / steps;
    
    // Movement happens while zoom is transitioning
    for (let i = 0; i < steps; i++) {
        currentRight += strideDistance;
        currentBottom += bottomStep;
        
        if (currentRight > targetRight) currentRight = targetRight;
        if (Math.abs(currentBottom - targetBottom) < Math.abs(bottomStep)) currentBottom = targetBottom;
        
        enemyWrapper.style.transition = `right ${strideDuration}ms linear, bottom ${strideDuration}ms linear`;
        enemyWrapper.style.right = currentRight + 'px';
        enemyWrapper.style.bottom = currentBottom + 'px';
        
        // Apply perspective and update z-index
        applyPerspectiveScale(enemyWrapper, currentBottom);
        queueZIndexUpdate();
        
        await sleep(strideDuration);
    }
    
    // Stop running and switch to idle
    playEnemyAnimation(enemyId, 'idle', true, null, 150);
    
    // Wait for zoom transition to complete fully (0.8s = 800ms)
    await sleep(900);
    
    // Determine attack type
    // Void Stalker (id 2) ALWAYS uses special attack
    // Shadow Beast (id 1) has 25% chance
    let useSpecialAttack;
    if (enemy.id === 2) {
        useSpecialAttack = true;  // 100% for Void Stalker
    } else {
        useSpecialAttack = Math.random() < 0.25;  // 25% for others
    }
    
    let baseDamage, attackType;
    
    if (useSpecialAttack) {
        baseDamage = Math.floor(Math.random() * 25) + 25;  // 25-50 damage (MUCH higher)
        attackType = 'POWER STRIKE';
        showActionText('POWER STRIKE!', '#ff3333');
        playSfx('hit');
    } else {
        baseDamage = Math.floor(Math.random() * 15) + 10;  // 10-25 damage (normal)
        attackType = 'ATTACK';
        playSfx('hit');
    }
    
    const isCrit = Math.random() < 0.15;
    const scaledBase = Math.floor(baseDamage * (enemy.attackMultiplier || 1));
    const damage = isCrit ? Math.floor(scaledBase * 1.5) : scaledBase;
    
    // Use different animation for special attack
    if (useSpecialAttack) {
        // Special attack uses faster, more aggressive animation
        playEnemyAnimation(enemyId, 'attack', false, () => {
            playEnemyAnimation(enemyId, 'idle', true, null, 150);
        }, 60);  // Faster animation (60ms instead of 80ms)
    } else {
        // Normal attack
        playEnemyAnimation(enemyId, 'attack', false, () => {
            playEnemyAnimation(enemyId, 'idle', true, null, 150);
        }, 80);
    }
    
    await sleep(360);
    
    shakeScreen(useSpecialAttack ? 'ultimate' : (isCrit ? 'critical' : 'normal'));
    
    // FIXED: Recalculate player position for accurate hit effect placement
    const currentPlayerRect = targetPlayerChar.getBoundingClientRect();
    
    createHitParticles(
        currentPlayerRect.left + currentPlayerRect.width / 2,
        currentPlayerRect.top + currentPlayerRect.height / 2,
        isCrit ? 20 : 12,
        'spark'
    );
    
    createSlashEffect(
        currentPlayerRect.left + currentPlayerRect.width / 2,
        currentPlayerRect.top + currentPlayerRect.height / 2,
        -1
    );
    
    // Play hit animation on targeted player
    playPlayerAnimation(targetPlayer.id, 'hit', false, () => {
        playPlayerAnimation(targetPlayer.id, 'idle', true, null, 150);
    });
    
    await sleep(80);
    showDamage(damage, targetPlayerChar, isCrit ? 'critical' : 'normal');
    
    // Apply damage to the targeted player
    if (targetPlayer.shield > 0) {
        const shieldDamage = Math.min(targetPlayer.shield, damage);
        targetPlayer.shield -= shieldDamage;
        const remainingDamage = damage - shieldDamage;
        if (remainingDamage > 0) {
            targetPlayer.hp = Math.max(0, targetPlayer.hp - remainingDamage);
        }
    } else {
        targetPlayer.hp = Math.max(0, targetPlayer.hp - damage);
    }
    
    updateCharacterDisplay();
    updatePlayerHPBars();
    
    // Wait to enjoy hit effects
    await sleep(480);
    
    // Return to original position (both X and Y)
    enemyWrapper.style.transition = 'right 0.75s ease-out, bottom 0.75s ease-out';
    enemyWrapper.style.right = originalRight + 'px';
    enemyWrapper.style.bottom = originalBottom + 'px';
    
    // Restore perspective
    applyPerspectiveScale(enemyWrapper, originalBottom);
    queueZIndexUpdate();
    
    // Wait for return journey to complete
    await sleep(600);
    
    // Wait extra time to ensure all particles/effects finish before unzoom
    await sleep(400);
    
    // END CINEMATIC
    await endCinematic();
    
    return true;
}

function updateEnemyDisplay(enemyId) {
    const enemy = enemies.find(e => e.id === enemyId);
    const wrapper = document.getElementById(`enemy-${enemyId}`);
    
    if (!enemy || !wrapper) return;
    
    const hpBar = wrapper.querySelector('.enemy-hp-bar-fill');
    const breakBar = wrapper.querySelector('.enemy-break-bar-fill');
    const breakPreview = wrapper.querySelector('.enemy-break-bar-preview');
    const breakWrapper = wrapper.querySelector('.enemy-break-bar-wrapper');
    const weaknessEls = wrapper.querySelectorAll('.enemy-weaknesses span');
    
    hpBar.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
    breakBar.style.width = `${(enemy.toughness / enemy.maxToughness) * 100}%`;
    if (enemy.toughness <= 0 && breakPreview) {
        breakPreview.remove();
    }

    const bloodFormActive = team.some(p => p.form === 'blood_lightning');
    if (breakBar) {
        breakBar.classList.toggle('blood-break', bloodFormActive);
    }
    if (breakPreview) {
        breakPreview.classList.toggle('blood-break', bloodFormActive);
    }
    if (breakWrapper) {
        breakWrapper.classList.toggle('blood-break', bloodFormActive);
    }
    
    const currentTurn = getCurrentTurn();
    const attacker = currentTurn && currentTurn.type === 'player'
        ? team.find(p => p.id === currentTurn.id)
        : null;
    weaknessEls.forEach(el => {
        const icon = el.textContent.trim();
        const weaknessHit = attacker && attacker.elements
            ? attacker.elements.includes(icon)
            : false;
        el.classList.toggle('weakness-glow', weaknessHit);
    });

    if (enemy.hp <= 0) {
        shakeScreen('ultimate');
        showActionText(`${enemy.name} DOWN!`, '#f87171');
        playSfx('hit');
        wrapper.classList.add('dead');
        
        // Make dead enemy unclickable
        const spriteDiv = wrapper.querySelector('.enemy-sprite');
        if (spriteDiv) {
            spriteDiv.onclick = null;
            spriteDiv.style.cursor = 'not-allowed';
        }
        wrapper.onclick = null;
        wrapper.style.cursor = 'not-allowed';
        wrapper.style.opacity = '0.5';
        
        if (selectedEnemy === enemyId) {
            selectedEnemy = null;
            autoSelectNextEnemy();
        }
    }
}

function updateCharacterDisplay() {
    team.forEach(char => {
        const charEl = document.getElementById(`char-${char.id}`);
        if (!charEl) return;
        
        const energyRing = charEl.querySelector('circle:last-child');
        const energyText = charEl.querySelector('.energy-indicator');
        const hpBar = charEl.querySelector('.hp-fill');
        const hpText = charEl.querySelector('.stat-text');
        const shieldOverlay = charEl.querySelector('.shield-fill-overlay');
        
        const circumference = 2 * Math.PI * 44;
        const offset = circumference * (1 - sharedEnergy / char.maxEnergy);
        energyRing.setAttribute('stroke-dashoffset', offset);
        energyText.textContent = sharedEnergy;
        energyText.className = sharedEnergy >= energyCosts.lightning ? 'energy-indicator full' : 'energy-indicator';
        
        hpBar.style.width = `${(char.hp / char.maxHp) * 100}%`;
        hpText.textContent = `${char.hp}/${char.maxHp}`;
        
        // Update shield overlay
        if (shieldOverlay) {
            shieldOverlay.style.width = `${(char.shield / char.maxShield) * 100}%`;
        }
        
        // LOW HP WARNING for character circle - < 25%
        const hpPercent = (char.hp / char.maxHp) * 100;
        if (hpPercent <= 25 && char.hp > 0) {
            charEl.classList.add('low-hp');
        } else {
            charEl.classList.remove('low-hp');
        }
        
        if (char.hp <= 0) {
            charEl.classList.add('dead');
            charEl.classList.remove('sacrifice-target');
        }
    });
}

function updatePlayerHPBars() {
    // HP bars removed from battlefield sprites - health is shown in character circles at bottom
    // This function is kept for backwards compatibility but does nothing
}

function updateActiveCharacter() {
    document.querySelectorAll('.character-circle').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelectorAll('.character.player').forEach(el => {
        el.classList.remove('active');
    });
    
    const currentTurn = getCurrentTurn();
    if (!currentTurn || currentTurn.type !== 'player') {
        clearSacrificeMode();
    }
    
    // PHASE 3: Update playerTurnActive flag
    playerTurnActive = currentTurn && currentTurn.type === 'player';
    
    // Clear break previews if not player turn
    if (!playerTurnActive) {
        clearBreakPreviews();
    }
    
    // PHASE 3: Show/hide selection markers based on turn
    document.querySelectorAll('.selection-circle').forEach(circle => {
        if (playerTurnActive && circle.parentElement.classList.contains('selected')) {
            circle.style.display = 'block';
        } else {
            circle.style.display = 'none';
        }
    });
    
    if (currentTurn && currentTurn.type === 'player') {
        const charEl = document.getElementById(`char-${currentTurn.id}`);
        if (charEl) {
            charEl.classList.add('active');
        }
        const modelEl = document.getElementById(`playerChar-${currentTurn.id}`);
        if (modelEl) {
            modelEl.classList.add('active');
        }

        if (lastPlayerTurnId !== currentTurn.id) {
            if (!selectedEnemy || !enemies.find(e => e.id === selectedEnemy && e.hp > 0)) {
                autoSelectNextEnemy();
            }
        }
        lastPlayerTurnId = currentTurn.id;
        if (selectedEnemy && !enemies.find(e => e.id === selectedEnemy && e.hp > 0)) {
            autoSelectNextEnemy();
        }

        if (pendingAction === 'punch') {
            clearPendingAction();
        }
        
        // Re-apply break preview for selected enemy during player turn
        if (selectedEnemy) {
            const enemy = enemies.find(e => e.id === selectedEnemy);
            const currentTurn = getCurrentTurn();
            const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
            const previewDamage = getBreakPreviewDamage(pendingAction || 'punch', enemy, currentPlayer);
            updateBreakPreview(selectedEnemy, previewDamage); // Default punch preview
        }
    }
}

function updateButtonStates() {
    const currentTurn = getCurrentTurn();
    const isPlayerTurn = currentTurn && currentTurn.type === 'player';
    const hasValidTarget = selectedEnemy && enemies.find(e => e.id === selectedEnemy && e.hp > 0);
    
    const punchBtn = document.getElementById('punchBtn');
    const heavyBtn = document.getElementById('heavyPunchBtn');
    const barrageBtn = document.getElementById('barrageBtn');
    const healBtn = document.getElementById('healBtn');
    const shieldBtn = document.getElementById('shieldBtn');
    
    if (punchBtn) {
        punchBtn.disabled = !isPlayerTurn || isAnimating || !hasValidTarget;
    }
    
    if (heavyBtn) {
        heavyBtn.disabled = !isPlayerTurn || isAnimating || skillPoints < 1 || !hasValidTarget;
    }
    
    if (barrageBtn) {
        barrageBtn.disabled = !isPlayerTurn || isAnimating || skillPoints < 2 || !hasValidTarget;
    }

    if (healBtn) {
        healBtn.disabled = !isPlayerTurn || isAnimating || skillPoints < 1;
    }

    if (shieldBtn) {
        shieldBtn.disabled = !isPlayerTurn || isAnimating || skillPoints < 1;
    }
}

function createSpeedToggle() {
    const tutorialPanel = document.getElementById('tutorialPanel');
    if (!tutorialPanel) return;
    if (document.getElementById('speedToggleBtn')) return;

    const toggle = document.createElement('button');
    toggle.id = 'speedToggleBtn';
    toggle.type = 'button';
    toggle.className = 'tutorial-btn speed-toggle';
    toggle.textContent = `Speed: ${gameSpeed}x`;
    toggle.addEventListener('click', () => {
        gameSpeed = gameSpeed === 1 ? 2 : 1;
        toggle.textContent = `Speed: ${gameSpeed}x`;
        const speedLabel = document.getElementById('tutorialSpeedLabel');
        if (speedLabel) {
            speedLabel.textContent = `Current speed: ${gameSpeed}x`;
        }
    });

    const footerButtons = tutorialPanel.querySelector('.tutorial-buttons');
    if (footerButtons) {
        footerButtons.insertBefore(toggle, footerButtons.firstChild);
    } else {
        tutorialPanel.appendChild(toggle);
    }

    const speedLabel = document.getElementById('tutorialSpeedLabel');
    if (speedLabel) {
        speedLabel.textContent = `Current speed: ${gameSpeed}x`;
    }
}

function updateTransformButtons() {
    const currentTurn = getCurrentTurn();
    const isPlayerTurn = currentTurn && currentTurn.type === 'player';
    const lightningBtn = document.getElementById('lightningTransformBtn');
    const blueFireBtn = document.getElementById('blueFireTransformBtn');
    const bloodLightningBtn = document.getElementById('bloodLightningTransformBtn');
    const energyValue = document.getElementById('energyValue');
    const energyBarFill = document.getElementById('energyBarFill');
    const formStatus = document.getElementById('formStatus');

    if (!lightningBtn || !blueFireBtn || !bloodLightningBtn) return;

    updateFormButtonVisibility();

    if (!isPlayerTurn) {
        lightningBtn.disabled = true;
        blueFireBtn.disabled = true;
        bloodLightningBtn.disabled = true;
        lightningBtn.classList.remove('ready');
        blueFireBtn.classList.remove('ready');
        bloodLightningBtn.classList.remove('ready');
        return;
    }

    const player = team.find(p => p.id === currentTurn.id);
    if (!player) {
        lightningBtn.disabled = true;
        blueFireBtn.disabled = true;
        bloodLightningBtn.disabled = true;
        lightningBtn.classList.remove('ready');
        blueFireBtn.classList.remove('ready');
        bloodLightningBtn.classList.remove('ready');
        return;
    }

    updateFormButtonVisibility();

    const hasLightningEnergy = sharedEnergy >= energyCosts.lightning;
    const hasBlueFireEnergy = sharedEnergy >= energyCosts.blue_fire;
    const hasStrengthenedEnergy = sharedEnergy >= energyCosts.strengthened_blue_fire;
    const hasBloodLightningEnergy = sharedEnergy >= energyCosts.blood_lightning;
    const hasAllyToSacrifice = team.some(p => p.id !== player.id && p.hp > 0);

    const canUseLightning = availableForms.lightning && hasLightningEnergy && player.form !== 'lightning' && player.form !== 'blood_lightning' && player.form !== 'strengthened_blue_fire';
    const canUseBlueFire = availableForms.blue_fire && hasBlueFireEnergy && player.form !== 'blue_fire' && player.form !== 'blood_lightning' && player.form !== 'strengthened_blue_fire';
    const canUseStrengthened = availableForms.blue_fire && hasStrengthenedEnergy && player.form === 'blue_fire' && player.form !== 'blood_lightning';
    const canUseBloodLightning = availableForms.blood_lightning && player.form === 'lightning' && hasBloodLightningEnergy && hasAllyToSacrifice;

    lightningBtn.disabled = !canUseLightning;
    blueFireBtn.disabled = !(canUseBlueFire || canUseStrengthened);
    bloodLightningBtn.disabled = !canUseBloodLightning;

    const energyPercent = Math.min(100, Math.max(0, (sharedEnergy / player.maxEnergy) * 100));
    if (energyValue) {
        energyValue.textContent = `${sharedEnergy} / ${player.maxEnergy}`;
    }
    if (energyBarFill) {
        energyBarFill.style.width = `${energyPercent}%`;
        energyBarFill.style.background = hasLightningEnergy
            ? 'linear-gradient(90deg, #fbbf24, #fde047)'
            : 'linear-gradient(90deg, #fbbf24, #f59e0b)';
    }
        if (formStatus) {
            const formLabel = player.form === 'base' ? 'Base' : player.form.replace('_', ' ').toUpperCase();
            const lockLabel = playerFormLocks[player.id]
                ? playerFormLocks[player.id].replace('_', ' ').toUpperCase()
                : 'OPEN';
            formStatus.textContent = `Form: ${formLabel} • Path: ${lockLabel}`;
        }

    lightningBtn.classList.toggle('ready', canUseLightning);
    blueFireBtn.classList.toggle('ready', canUseBlueFire || canUseStrengthened);
    bloodLightningBtn.classList.toggle('ready', canUseBloodLightning);
}

function clearPendingAction() {
    pendingAction = null;
    pendingAllyAction = null;
    allowButtonConfirm = false;
    const punchBtn = document.getElementById('punchBtn');
    const heavyBtn = document.getElementById('heavyPunchBtn');
    const barrageBtn = document.getElementById('barrageBtn');
    const healBtn = document.getElementById('healBtn');
    const shieldBtn = document.getElementById('shieldBtn');
    if (punchBtn) punchBtn.classList.remove('confirming');
    if (heavyBtn) heavyBtn.classList.remove('confirming');
    if (barrageBtn) barrageBtn.classList.remove('confirming');
    if (healBtn) healBtn.classList.remove('confirming');
    if (shieldBtn) shieldBtn.classList.remove('confirming');
}

function armAction(actionType) {
    clearPendingAction();
    pendingAction = actionType;
    allowButtonConfirm = false;
    const buttonMap = {
        punch: document.getElementById('punchBtn'),
        heavy: document.getElementById('heavyPunchBtn'),
        barrage: document.getElementById('barrageBtn'),
        heal: document.getElementById('healBtn'),
        shield: document.getElementById('shieldBtn')
    };
    const clickedButton = buttonMap[actionType];
    if (clickedButton) {
        clickedButton.classList.add('confirming');
    }
    if (selectedEnemy && playerTurnActive) {
        const enemy = enemies.find(e => e.id === selectedEnemy);
        const currentTurn = getCurrentTurn();
        const currentPlayer = currentTurn && currentTurn.type === 'player' ? team.find(p => p.id === currentTurn.id) : null;
        updateBreakPreview(selectedEnemy, getBreakPreviewDamage(actionType, enemy, currentPlayer));
    }
}

async function playerAction(actionType) {
    console.log('playerAction called:', actionType, 'isAnimating:', isAnimating);

    const currentTurn = getCurrentTurn();
    console.log('Current turn:', currentTurn);

    if (!currentTurn || currentTurn.type !== 'player') {
        console.log('Action blocked: not player turn');
        return;
    }

    const actingPlayer = team.find(p => p.id === currentTurn.id);
    if (!actingPlayer || actingPlayer.hp <= 0) {
        console.log('Action blocked: acting player is dead');
        return;
    }

    if (isAnimating) {
        console.log('Action blocked: already animating');
        return;
    }

    const isSupportAction = actionType === 'heal' || actionType === 'shield';
    const hasValidTarget = selectedEnemy && enemies.find(e => e.id === selectedEnemy && e.hp > 0);
    if (!hasValidTarget && !isSupportAction) {
        showActionText('SELECT TARGET!', '#ef4444');
        clearPendingAction();
        return;
    }

    if (isSupportAction) {
        if (pendingAction !== actionType) {
            armAction(actionType);
            showActionText(actionType === 'heal' ? 'CONFIRM HEAL?' : 'CONFIRM SHIELD?', '#fbbf24');
            return;
        }
        if (!pendingAllyAction) {
            showActionText('SELECT AN ALLY', '#fbbf24');
            highlightAllyTargets(actingPlayer.id);
            return;
        }
        allowButtonConfirm = true;
    }

    const punchBtn = document.getElementById('punchBtn');
    const heavyBtn = document.getElementById('heavyPunchBtn');
    const barrageBtn = document.getElementById('barrageBtn');

    const healBtn = document.getElementById('healBtn');
    const shieldBtn = document.getElementById('shieldBtn');

    const buttonMap = {
        punch: punchBtn,
        heavy: heavyBtn,
        barrage: barrageBtn,
        heal: healBtn,
        shield: shieldBtn
    };

    const clickedButton = buttonMap[actionType];

    // First press: arm the selected action for confirmation
    if (pendingAction !== actionType) {
        armAction(actionType);
        showActionText(actionType === 'heal' ? 'CONFIRM HEAL?' : actionType === 'shield' ? 'CONFIRM SHIELD?' : 'CONFIRM ATTACK?', '#fbbf24');
        if (!isSupportAction) {
            allowButtonConfirm = true;
        }
        return;
    }

    if (!isSupportAction && lastInputSource === 'keyboard' && !allowButtonConfirm) {
        showActionText('PRESS SPACE/ENTER TO CONFIRM', '#fbbf24');
        return;
    }

    // Second press: execute the armed action
    clearPendingAction();
    isAnimating = true;

    let success = false;

    if (actionType === 'punch') {
        success = await performPunch();
    } else if (actionType === 'heavy') {
        success = await performHeavyPunch();
    } else if (actionType === 'barrage') {
        success = await performPunchBarrage();
    } else if (actionType === 'heal') {
        success = await performHeal();
    } else if (actionType === 'shield') {
        success = await performShield();
    }

    console.log('Action success:', success);

    if (!success) {
        isAnimating = false;
        updateButtonStates();
        updateTransformButtons();
        return;
    }

    updateCharacterDisplay();
    updatePlayerHPBars();
    updateSPDisplay();
    updateButtonStates();
    updateTransformButtons();

    if (enemies.every(e => e.hp <= 0)) {
        if (currentWave < maxWaves) {
            currentWave++;
            showActionText(`WAVE ${currentWave}!`, '#fbbf24');
            await startNextWave();
        } else {
            showActionText('VICTORY!', '#fbbf24');
        }
        isAnimating = false;
        return;
    }

    await advanceTurnWithAnimation();
    updateActiveCharacter();

    isAnimating = false;

    await processNextTurn();
}

async function processNextTurn() {
    const currentTurn = getCurrentTurn();
    
    if (!currentTurn) {
        console.error('No current turn found - recalculating turn order');
        calculateTurnOrder();
        return;
    }
    
    updateButtonStates();
    updateTransformButtons();
    
    // Only auto-process enemy turns, not player turns
    if (currentTurn.type === 'player') {
        const player = team.find(p => p.id === currentTurn.id);
        if (!player || player.hp <= 0) {
            console.log('Skipping dead player turn');
            await advanceTurnWithAnimation();
            updateActiveCharacter();
            await processNextTurn();
            return;
        }
        allowButtonConfirm = false;
        lastInputSource = 'keyboard';
        applyDamageOverTime(player);
        updateCharacterDisplay();
        // It's the player's turn - wait for player input
        return;
    }
    
    if (currentTurn.type === 'enemy' && !isAnimating) {
        if (tutorialActive) {
            await advanceTurnWithAnimation();
            updateActiveCharacter();
            await processNextTurn();
            return;
        }
        const enemy = enemies.find(e => e.id === currentTurn.id);
        
        // BUG FIX: Check if enemy still exists and is alive
        if (!enemy || enemy.hp <= 0) {
            console.log(`Enemy ${currentTurn.id} is dead or missing, skipping turn`);
            await advanceTurnWithAnimation();
            updateActiveCharacter();
            // Recurse to process next valid turn
            await processNextTurn();
            return;
        }

        applyDamageOverTime(enemy);
        updateEnemyDisplay(enemy.id);
        
        await sleep(500);
        
        isAnimating = true;
        
    if (enemy.breakTurnsRemaining > 0) {
            // PHASE 3: Show turns remaining
            showActionText(`${enemy.name} STUNNED! (${enemy.breakTurnsRemaining} turn${enemy.breakTurnsRemaining > 1 ? 's' : ''} left)`, '#fbbf24');
            enemy.breakTurnsRemaining--;
            
            if (enemy.breakTurnsRemaining === 0) {
                recoverFromBreak(enemy);
            }
            
            await sleep(900);
    } else {
        await performEnemyAttack(currentTurn.id);
    }
        
        updateCharacterDisplay();
        updatePlayerHPBars();
        
        if (team.every(char => char.hp <= 0)) {
            showActionText('DEFEAT!', '#ef4444');
            isAnimating = false;
            return;
        }
        
        await advanceTurnWithAnimation();
        updateActiveCharacter();
        
        isAnimating = false;
        
        await processNextTurn();
    }
}

// ==================== START GAME ====================
function transformAction(formType) {
    if (formType === 'blood_lightning') {
        startSacrificeSelection();
        return;
    }
    if (formType === 'blue_fire') {
        const currentTurn = getCurrentTurn();
        if (currentTurn && currentTurn.type === 'player') {
            const player = team.find(p => p.id === currentTurn.id);
            if (player && player.form === 'blue_fire') {
                transformPlayer('strengthened_blue_fire');
                return;
            }
        }
    }
    transformPlayer(formType);
}

async function transformPlayer(formType) {
    const currentTurn = getCurrentTurn();
    if (!currentTurn || currentTurn.type !== 'player') return;

    const player = team.find(p => p.id === currentTurn.id);
    if (!player || player.hp <= 0) return;
    if (isAnimating) return;

            if (formType === 'lightning' || formType === 'blue_fire' || formType === 'strengthened_blue_fire') {
        const cost = energyCosts[formType];
        if (sharedEnergy < cost) {
            showActionText(`NEED ${cost} ENERGY`, '#ef4444');
            return;
        }

        if (player.form === formType) {
            return;
        }

        if (formType === 'strengthened_blue_fire' && player.form !== 'blue_fire') {
            showActionText('NEED BLUE FIRE FORM', '#ef4444');
            return;
        }

        if (formType === 'strengthened_blue_fire' && sharedEnergy < energyCosts.strengthened_blue_fire) {
            showActionText(`NEED ${energyCosts.strengthened_blue_fire} ENERGY`, '#ef4444');
            return;
        }

                sharedEnergy = Math.max(0, sharedEnergy - cost);
                player.form = formType;
                playerFormLocks[player.id] = formType;
    if (formType === 'lightning') {
        availableForms.blood_lightning = true;
    }
        const formMessage = formType === 'lightning'
            ? 'LIGHTNING FORM!'
            : formType === 'blue_fire'
                ? 'BLUE FIRE FORM!'
                : 'STRENGTHENED BLUE FIRE!';
        showActionText(formMessage, '#fbbf24');

        handleTutorialProgress('use_form');

        const playerEl = document.getElementById(`playerChar-${player.id}`);
        if (playerEl) {
            const rect = playerEl.getBoundingClientRect();
            const particleCount = formType === 'lightning' ? 18 : formType === 'strengthened_blue_fire' ? 22 : 14;
            createHitParticles(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                particleCount,
                'spark'
            );
        }

        flashScreen(false);
        shakeScreen('normal');

        playPlayerAnimation(player.id, 'idle', true, null, 150);
        applyPlayerFormClass(player);
        updateCharacterDisplay();
                updateTransformButtons();
        clearBreakPreviews();
        updateAllEnemiesDisplay();
        updateFormButtonVisibility();
        return;
    }

    if (formType === 'blood_lightning') {
        if (player.form !== 'lightning') {
            showActionText('NEED LIGHTNING FORM', '#ef4444');
            return;
        }

        const cost = energyCosts.blood_lightning;
        if (sharedEnergy < cost) {
            showActionText(`NEED ${cost} ENERGY`, '#ef4444');
            return;
        }

        const sacrifice = pendingSacrifice ? team.find(p => p.id === pendingSacrifice) : null;
        if (!sacrifice || sacrifice.hp <= 0) {
            showActionText('SELECT AN ALLY', '#ef4444');
            return;
        }

        handleTutorialProgress('use_form');

        isAnimating = true;

        // Sacrifice ally
        const sacrificedForm = sacrifice.form || 'base';
        const bonus = getBloodLightningBonus(sacrificedForm);
        playSacrificeAnimation(sacrifice.id);
        pendingSacrifice = null;
        sacrifice.hp = 0;
        sacrifice.shield = 0;
        sacrifice.sacrificedForm = sacrificedForm;
        sharedEnergy = Math.max(0, sharedEnergy - cost);
        updateCharacterDisplay();
        showActionText(`${sacrifice.name} SACRIFICED`, '#ef4444');

        // Play transformation animation then switch form
        const playerEl = document.getElementById(`playerChar-${player.id}`);
        if (playerEl) {
            const rect = playerEl.getBoundingClientRect();
            createHitParticles(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                24,
                'spark'
            );
        }

        flashScreen(true);
        shakeScreen('critical');

                playPlayerAnimation(player.id, 'lightning_to_blood', false, () => {
            player.form = 'blood_lightning';
                    playerFormLocks[player.id] = 'blood_lightning';
                    player.bloodLightningBonus = bonus;
                    player.sacrificedForm = sacrificedForm;
            availableForms.lightning = false;
            availableForms.blue_fire = false;
            applyPlayerFormClass(player);
            playPlayerAnimation(player.id, 'idle', true, null, 150);
        }, 120);

        // Small delay to let animation register
        await sleep(1000);

        updateCharacterDisplay();
        updateTransformButtons();
        clearBreakPreviews();
        updateAllEnemiesDisplay();
        updateFormButtonVisibility();
        isAnimating = false;
        return;
    }
}

function updateAllEnemiesDisplay() {
    enemies.forEach(enemy => updateEnemyDisplay(enemy.id));
}

function startSacrificeSelection() {
    const currentTurn = getCurrentTurn();
    if (!currentTurn || currentTurn.type !== 'player') return;
    const player = team.find(p => p.id === currentTurn.id);
    if (!player || player.hp <= 0) return;
    if (player.form !== 'lightning') {
        showActionText('NEED LIGHTNING FORM', '#ef4444');
        return;
    }
    if (sharedEnergy < energyCosts.blood_lightning) {
        showActionText(`NEED ${energyCosts.blood_lightning} ENERGY`, '#ef4444');
        return;
    }
    const hasAllyToSacrifice = team.some(p => p.id !== player.id && p.hp > 0);
    if (!hasAllyToSacrifice) {
        showActionText('NO ALLY TO SACRIFICE', '#ef4444');
        return;
    }
    sacrificeMode = true;
    pendingSacrifice = null;
    pendingAction = null;
    showActionText('SELECT ALLY TO SACRIFICE', '#f87171');
    highlightSacrificeTargets(player.id);
}

function highlightSacrificeTargets(playerId) {
    document.querySelectorAll('.character-circle').forEach(el => {
        el.classList.remove('sacrifice-target');
    });
    team.forEach(member => {
        if (member.id !== playerId && member.hp > 0) {
            const charEl = document.getElementById(`char-${member.id}`);
            if (charEl) {
                charEl.classList.add('sacrifice-target');
            }
            const spriteEl = document.getElementById(`playerChar-${member.id}`);
            if (spriteEl) {
                spriteEl.classList.add('ally-selectable');
                spriteEl.classList.add('ally-sacrifice');
            }
        }
    });
}

function clearSacrificeMode() {
    sacrificeMode = false;
    pendingSacrifice = null;
    document.querySelectorAll('.character-circle').forEach(el => {
        el.classList.remove('sacrifice-target');
    });
    document.querySelectorAll('.character.player').forEach(el => {
        el.classList.remove('ally-selectable');
        el.classList.remove('ally-sacrifice');
    });
}

function highlightAllyTargets(excludeId) {
    document.querySelectorAll('.character-circle').forEach(el => {
        el.classList.remove('sacrifice-target');
    });
    team.forEach(member => {
        if (member.id !== excludeId && member.hp > 0) {
            const charEl = document.getElementById(`char-${member.id}`);
            if (charEl) {
                charEl.classList.add('sacrifice-target');
            }
            const spriteEl = document.getElementById(`playerChar-${member.id}`);
            if (spriteEl) {
                spriteEl.classList.add('ally-selectable');
                if (pendingAction === 'heal') {
                    spriteEl.classList.add('ally-heal');
                }
                if (pendingAction === 'shield') {
                    spriteEl.classList.add('ally-shield');
                }
            }
        }
    });
}

function clearAllyTargets() {
    document.querySelectorAll('.character-circle').forEach(el => {
        el.classList.remove('sacrifice-target');
    });
    document.querySelectorAll('.character.player').forEach(el => {
        el.classList.remove('ally-selectable');
        el.classList.remove('ally-heal');
        el.classList.remove('ally-shield');
        el.classList.remove('ally-sacrifice');
    });
}

function playSacrificeAnimation(targetId) {
    const circle = document.getElementById(`char-${targetId}`);
    const sprite = document.getElementById(`playerChar-${targetId}`);
    if (circle) {
        circle.classList.add('sacrificing');
        circle.addEventListener('animationend', () => {
            circle.classList.add('sacrificed');
        }, { once: true });
    }
    if (sprite) {
        sprite.classList.add('sacrificing');
        sprite.addEventListener('animationend', () => {
            sprite.classList.add('sacrificed');
        }, { once: true });
    }
}

function getBloodLightningBonus(form) {
    if (form === 'lightning') return 0.2;
    if (form === 'blue_fire') return 0.3;
    if (form === 'strengthened_blue_fire') return 0.5;
    return 0;
}

init();
