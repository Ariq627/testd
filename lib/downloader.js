const { fetchJson } = require('../tools/fetcher')
const { twitter } = require('video-url-link')
const { promisify } = require('util')
const config = require('../config.json')

const twtGetInfo = promisify(twitter.getInfo)

/**
 * Get Instagram media from URL.
 * @param {String} url
 * @returns {Object}
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.vhtear.com/instadl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {String} url 
 * @returns {Object}
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const tik2 = (url2) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url2}`)
    fetchJson(`http://arugaz.my.id/api/media/tiktok?url=${url2}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

 /**
 * Get media from Facebook.
 * @param {String} query
 * @returns {Object}
 */
const fb = (query) => new Promise((resolve, reject) => {
    console.log(`Downloading FB Video from ${query}`)
    fetchJson(`https://api.vhtear.com/fbdl?link=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {String} url
 * @returns {Object}
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.vhtear.com/ytdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Joox music metadata from title.
 * @param {String} title
 * @returns {Object}
 */
const joox = (title) => new Promise((resolve, reject) => {
    console.log(`Get Joox music from ${title}...`)
    fetchJson(`https://api.vhtear.com/music?query=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter media from URL.
 * @param {String} url 
 * @returns {Object}
 */
const tweet = (url) => new Promise((resolve, reject) => {
    console.log(`Get Twitter media from ${url}`)
    twtGetInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

module.exports = {
    fb,
    ytdl,
    tik,
    tik2,
    joox,
    insta,
    tweet
}
