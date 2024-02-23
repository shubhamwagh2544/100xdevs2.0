"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log('Creating a story...');
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, videoLength, videoQuality) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.videoLength = videoLength;
        this.videoQuality = videoQuality;
    }
}
