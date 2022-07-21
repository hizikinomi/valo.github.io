'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: 'ジェットの英語版ウルトのセリフは？（敵側時）', c: ['Get out of may way!', 'Watch this!', '失せな！']},
    {q: 'ブリンクでサイファーのワイヤーは壊せる', c: ['壊せない', '壊せる' ]},
    {q: 'セージのウルトポイントは？', c: ['8', '7', '9']},
    {q: 'ソーヴァのショックダーツの価格は？', c: ['150', '100', '200']},
    {q: '安藤くんの好きなVALORANTのエージェントは？', c: ['ソーヴァ', 'スカイ', 'セージ']},
    {q: 'オペレーターの値段は？', c: ['4700', '5500', '5000']},
    {q: 'レイズのウルトのセリフは？(味方時）', c: ['パーティーターイム！', '爆発注意！', 'たくあん']},
    {q: 'フェニックスの英語版ウルトのセリフは？', c: ['Jokes over!youre dead!', 'Come on,lets go!', 'お遊びはここまでだ！']},
    {q: 'ヴァイパーの出身地は？', c: ['アメリカ', 'イギリス', 'ドイツ']},
    {q: 'ヴァイパーのカーテンの正式名称は？', c: ['トキシックスクリーン', 'ポイズンスクリーン', 'ポイズンカーテン']},
    {q: 'ブリーチのフラッシュの正式名称は？', c: ['フラッシュポイント', 'フラッシュウォール', 'フラッシュショック']},
    {q: 'レイナのソウルオーブは何秒間残る？', c: ['3秒', '2秒', '5秒']},
    {q: 'sssその体をくれ！でおなじみのエージェントのウルトの名称は？', c: ['ニューラルセフト', 'サイバーセフト', 'サーチングセフト']},
    {q: 'レイナの出身地は？', c: ['メキシコ', 'トルコ', 'ブラジル']},
    {q: 'ブリーチの出身地は？', c: ['スウェーデン', 'ベルギー', 'アメリカ']},
    {q: 'OpticのVictorがよく使用するエージェントのタイプは？', c: ['デュエリスト', 'イニシエーター', 'コントローラー']},
    {q: '作者ナガノ、ひじきの好きなキャラクターの正式名称は？', c: ['じぶんツッコミくま', 'なんかちいさくてかわいいやつ', 'ツッコミくまさん']},
    {q: 'VALORANT三大スモーク使いといえば、Sugarzero、Marved、あともう一人は？', c: ['Mako', 'Boaster', 'Barce']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}