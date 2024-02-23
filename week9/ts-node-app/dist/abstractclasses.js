"use strict";
class RecordVideo {
    constructor(cameraMode, videoQuality, videoLength) {
        this.cameraMode = cameraMode;
        this.videoQuality = videoQuality;
        this.videoLength = videoLength;
    }
    getVideoInfo() {
        return `
            Camera Mode: ${this.cameraMode}, 
            Video Quality: ${this.videoQuality}, 
            Video Length: ${this.videoLength}
        `;
    }
}
class SnapChat extends RecordVideo {
    constructor(cameraMode, videoQuality, videoLength, filter, burst) {
        super(cameraMode, videoQuality, videoLength);
        this.cameraMode = cameraMode;
        this.videoQuality = videoQuality;
        this.videoLength = videoLength;
        this.filter = filter;
        this.burst = burst;
    }
    getSepoliaFilter() {
        return `
            Sepolia Filter: ${this.filter}
        `;
    }
    getSnapInfo() {
        return `
            Camera Mode: ${this.cameraMode}, 
            Video Quality: ${this.videoQuality}, 
            Video Length: ${this.videoLength},
            Filter: ${this.filter},
            Burst: ${this.burst}
        `;
    }
    getVideoInfo() {
        return `
            overriding the parent method
            ${super.getVideoInfo()}
        `;
    }
}
const snapChat = new SnapChat('video', '1080p', 60, 'sepia', 5);
console.log(snapChat.getSnapInfo());
console.log(snapChat.getVideoInfo());
console.log(snapChat.getSepoliaFilter());
