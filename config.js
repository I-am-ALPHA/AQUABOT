const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './cobramain.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    
    SESSION: process.env.AQUA_SESSION === undefined ? 'AQUA=1lQAwJgC#JEpP3YmEQ1V6487mG3d7UnkPGfCxeNAAr7ZBKWfKFJU' : process.env.AQUA_SESSION,
    AUTO_REACT: process.env.AUTO_REACT === undefined ? 'false' : process.env.AUTO_REACT,
    URL_1NAME: process.env.URL_1NAME === undefined ? 'Youtube' : process.env.URL_1NAME,
    URL_1LINK: process.env.URL_1LINK === undefined ? 'https://www.youtube.com/channel/UCqth_NqepnBJXJSHrqV07UQ' : process.env.URL_1LINK,
    URL_2NAME: process.env.URL_2NAME === undefined ? 'Instagram' : process.env.URL_2NAME,
    URL_2LINK: process.env.URL_2LINK === undefined ? 'https://www.instagram.com/thishaxkya' : process.env.URL_2LINK,
    FOOTER: process.env.FOOTER === undefined ? 'ALPHA' : process.env.FOOTER,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    ANTIGROUP: process.env.ANTIGRP_LINK === undefined ? 'false' : process.env.ANTIGRP_LINK,
    CAPTION: process.env.CAPTION === undefined ? '© ALPHA' : process.env.CAPTION,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ? 'false' : process.env.INBOX_BLOCK,
    INBOX_BLOCK_MSG: process.env.INBOX_BLOCK_MSG === undefined ? 'default' : process.env.INBOX_BLOCK_MSG,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/gzJRRj5/meme.jpg' : process.env.ALIVE_LOGO,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'ALPHA' : process.env.BOT_NAME,
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*Downloading Song...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*Uploading Song...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*Downloading Video...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*Uploading Video...*' : process.env.VIDEO_UP,
    FILE_DOWN: process.env.FILE_DOWN === undefined ? '*Downloadingfile...*' : process.env.FILE_DOWN,
    FILE_UP: process.env.FILE_UP === undefined ? '*Uploading file...*' : process.env.FILE_UP,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    STIC_WM:process.env.STIC_WM === undefined ? 'A L P H A' : process.env.STIC_WM,
    OWN_NAME:process.env.OWN_NAME === undefined ? 'ALPHA' : process.env.OWN_NAME,
    OWN_NUMBER:process.env.OWN_NUMBER === undefined ? '94703086910' : process.env.OWN_NUMBER,
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? 'feYrr3cKVuBpirzaKg6GwEir' : process.env.REMOVE_BG_API_KEY,
    SUDO: process.env.SUDO === undefined ? '94703086910' : process.env.SUDO
};
