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
        position_tags: ['發起人', '專案策劃', 'Aletheia 認證開發', 'CIS 視覺設計'],
    }, {
        name: 'xiaoma',
        avatarUrl: 'xiaoma.jpg',
        profileUrl: '',
        introduction: '我這輩子最後悔的事，就是沒有聽我媽的話；可是詳細內容我忘了，因為我當時根本沒在聽。',
        position_tags: ['資安', 'Plutus 前端', 'Aletheia 身分驗證'],
    }, {
        name: '赤焰',
        avatarUrl: 'https://avatars.githubusercontent.com/u/190609990?v=4',
        profileUrl: 'https://chiyan54554.github.io/',
        introduction: '且慢！吾非好幼女之輩，實慕御姐之姿，故自幼育之，待其長成，此乃大智，非惡也。世人皆醉我獨醒，待他日青史留名。',
        position_tags: ['資安', 'Aletheia 加密開發', 'Janus 後端開發'],
    },
];