abstract class RecordVideo {
    constructor(
        public cameraMode: string,
        public videoQuality: string,
        public videoLength: number
    ) { }

    // abstract method
    abstract getSepoliaFilter(): string

    // concrete method or implemented method
    getVideoInfo(): string {
        return `
            Camera Mode: ${this.cameraMode}, 
            Video Quality: ${this.videoQuality}, 
            Video Length: ${this.videoLength}
        `
    }
}

// const recordVideo = new RecordVideo('video', '1080p', 60);   // error: Cannot create an instance of an abstract class.

class SnapChat extends RecordVideo {
    constructor(
        public cameraMode: string,
        public videoQuality: string,
        public videoLength: number,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, videoQuality, videoLength);
    }

    getSepoliaFilter(): string {
        return `
            Sepolia Filter: ${this.filter}
        `
    }

    getSnapInfo(): string {
        return `
            Camera Mode: ${this.cameraMode}, 
            Video Quality: ${this.videoQuality}, 
            Video Length: ${this.videoLength},
            Filter: ${this.filter},
            Burst: ${this.burst}
        `
    }

    // we can override the method of the parent class
    getVideoInfo(): string {
        return `
            overriding the parent method
            ${super.getVideoInfo()}
        `
    }
}

const snapChat = new SnapChat('video', '1080p', 60, 'sepia', 5);
console.log(snapChat.getSnapInfo());
console.log(snapChat.getVideoInfo());
console.log(snapChat.getSepoliaFilter());