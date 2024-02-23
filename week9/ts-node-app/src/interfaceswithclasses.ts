interface TakePicture {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePicture, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    createStory(): void {
        console.log('Creating a story...');
    }
}

class YouTube implements TakePicture {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoLength: number,
        public videoQuality: string
    ) { }
}