var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted)
            player.media.muted = true;
        player.play(player.media);
    };
    return AutoPlay;
}());
export default AutoPlay;