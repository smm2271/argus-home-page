interface Dev {
    name: string;
    avatarUrl: string;
    profileUrl: string;
    introduction: string;
    position_tags: string[];
}

export const devs: Dev[] = [
    {
        name: '蘇某',
        avatarUrl: 'https://avatars.githubusercontent.com/u/115923904?v=4',
        profileUrl: 'https://zalicsu.idv.tw/',
        introduction: '也許做開源的意義，就是在世界上留下些什麼吧',
        position_tags: ['發起人', '專案策劃', 'Aletheia認證開發', 'CIS視覺設計'],
    }, {
        name: '赤焰',
        avatarUrl: '',
        profileUrl: '',
        introduction: '',
        position_tags: ['資安', 'Aletheia加密開發', 'Janus後端開發'],
    }
];