var levels = [
  {
    name: 'justifyContent 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justifyContent</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justifyContent: flex-end;</code> will move the frog to the right.</p>'
    },
    board: 'g',
    style: {'justifyContent': 'flex-end'},
    before: "pond:{",
    after: "}"
  },
  {
    name: 'justifyContent 2',
    instructions: {
      'en': '<p>Use <code>justifyContent</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>'
    },
    board: 'gy',
    style: {'justifyContent': 'center'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'justifyContent 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justifyContent</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justifyContent</code>.</p>'
    },
    board: 'gyr',
    style: {'justifyContent': 'space-around'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'justifyContent 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justifyContent</code>. This time, the lilypads have equal spacing between them.</p>'
    },
    board: 'gyr',
    style: {'justifyContent': 'space-between'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'alignItems 1',
    instructions: {
      'en': '<p>Now use <code>alignItems</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>'
    },
    board: 'gyr',
    style: {'alignItems': 'flex-end'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'alignItems 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justifyContent</code> and <code>alignItems</code>.</p>'
    },
    board: 'g',
    style: {'justifyContent': 'center', 'alignItems': 'center'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'alignItems 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justifyContent</code> and <code>alignItems</code>.</p>'
    },
    board: 'gyr',
    style: {'justifyContent': 'space-around', 'alignItems': 'flex-end'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 1',
    instructions: {
      'en': '<p>flexD 1</p>'
    },
    board: 'gyr',
    style: {'flexDirection': 'row-reverse'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 2',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>flexDirection</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>'
    },
    board: 'gyr',
    style: {'flexDirection': 'column'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 3',
    instructions: {
      'en': '<p> flex direction 3</p>'
    },
    board: 'gyr',
    style: {'flexDirection': 'row-reverse', 'justifyContent': 'flex-end'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flexDirection</code> and <code>justifyContent</code>.</p><p>Notice that when the flex direction is a column, <code>justifyContent</code> changes to the vertical and <code>alignItems</code> to the horizontal.</p>'
    },
    board: 'gyr',
    style: {'flexDirection': 'column', 'justifyContent': 'flex-end'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 5',
    instructions: {
      'en': '<p>Flex direc 5</p>',
    },
    board: 'gyr',
    style: {'flexDirection': 'column-reverse', 'justifyContent': 'space-between'},
    before: "pond: {",
    after: "}"
  },
  {
    name: 'flexDirection 6',
    instructions: {
      'en': '<p>Flex direc 6</p>',
    },
    board: 'gyr',
    style: {'flexDirection': 'row-reverse', 'justifyContent': 'center', 'alignItems': 'flex-end'},
    before: "pond: {",
    after: "}"
  },
  // {
  //   name: 'order 1',
  //   instructions: {
  //     'en': '<p>Order 1</p>',
  //   },
  //   board: 'gyr',
  //   selector: 'y',
  //   style: {'order': 1},
  //   before: "pond:{\n justifyContent: 'flex-start'\n}\nyellow: {",
  //   after: "}"
  // },
  // {
  //   name: 'order 2',
  //   instructions: {
  //     'en': '<p>Order 2</p>',
  //   },
  //   board: 'gggrg',
  //   selector: 'r',
  //   style: {'order': -1},
  //   before: "pond:{\n justifyContent: 'flex-start'\n}\nred: {",
  //   after: "}"
  // },
  {
    name: 'alignSelf 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>alignSelf</code>. This property accepts the same values as <code>alignItems</code> and its value for the specific item.</p>',
      'de': '<p><code>alignSelf</code> ist eine weitere Eigenschaft f&uuml;r einzelne Elemente. Sie akzeptiert die gleichen Werte wie <code>alignItems</code>.</p>',
      'pt-br': '<p>Outra propriedade que você pode aplicar para itens individuais é <code>alignSelf</code>. Esta propriedade aceita os mesmos valores que <code>alignItems</code> e seus valores são usados para o item específico.</p>',
      'es': '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>alignSelf</code>. Esta propiedad acepta los mismos valores de <code>alignItems</code> y sus valores son usados para un elemento específico</p>',
      'fr': '<p>Une autre propriété que vous pouvez appliquer sur des éléments individuels est <code>alignSelf</code>. Cette propriété accepte les mêmes valeurs que <code>alignItems</code>, mais s\'applique seulement à l\'élément ciblé.</p>',
      'ru': '<p>Еще одно свойство, которое ты можешь применить к определенному элементу это <code>alignSelf</code>. Это свойство принимает те же значения, что и <code>alignItems</code>.</p>',
      'fa': '<p>خاصیت دیگری وجود دارد که به شما امکان تراز بندی فردی (یک ایتم) را می دهد، این خاصت <code>alignSelf</code> نام دارد. مقادیر این خاصیت دقیقا هما مقادیر خاصیت <code>alignItems</code> است.</p>',
      'zh-cn': '<p>另一个你可以使用的控制单个元素的属性是<code>alignSelf</code>。这个属性接受和<code>alignItems</code>一样的那些值。</p>',
      'tr': '<p>Öğe başına uygulayabileceğiniz bir başka kural ise <code>alignSelf</code>\'tir. Bu kural <code>alignItems</code> kuralı ile aynı değerleri alır ve bu değeri o öğe için uygular.</p>',
      'it': '<p>Un\'altra proprieta\' che e\' possibile applicare ai singoli elementi e\' <code>alignSelf</code>. Essa accetta gli stessi valori di <code>alignItems</code>.</p>',
      'ko': '<p><code>alignSelf</code>는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 <code>alignItems</code>가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.</p>',
      'lt': '<p>Kita komanda, kurią galima pritaikyti pavieniams elementams yra <code>alignSelf</code>. Ši komanda reaguoja į tas pačias vertes, kaip ir <code>alignItems</code>.</p>',
    },
    board: 'ggygg',
    selector: 'y',
    style: {'alignSelf': 'flex-end'},
    before: "pond:{\n justifyContent: 'flex-start',\n alignItems: 'flex-start'\n}\nyellow: {",
    after: "}"
  },
  // {
  //   name: 'alignSelf 2',
  //   instructions: {
  //     'en': '<p> alignself 2</p>'
  //   },
  //   board: 'ygygg',
  //   selector: 'y',
  //   style: {'alignSelf': 'flex-end', 'order': 1},
  //   before: "pond:{\n justifyContent: 'flex-start',\n alignItems: 'flex-start'\n}\nyellow: {",
  //   after: "}"
  // },
  {
    name: 'flexWrap 1',
    instructions: {
      'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flexWrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>'
    },
    board: 'ygggggr',
    style: {'flexWrap': 'wrap'},
    before: "pond: {",
    after: "}",
    fluid: 5
  },
  {
    name: 'flexWrap 2',
    instructions: {
      'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flexDirection</code> and <code>flexWrap</code>.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: {'flexDirection': 'column', 'flexWrap': 'wrap'},
    before: "pond: {",
    after: "}",
    fluid: 5
  },
  // {
  //   name: 'flexWrap 3',
  //   instructions: {
  //     'en': '<p>flexwrap 3</p>',
  //   },
  //   board: 'gggggrrrrryyyyy',
  //   style: {'flexFlow': 'row wrap'},
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 5
  // },
  // {
  //   name: 'alignContent 1',
  //   instructions: {
  //     'en': '<p>alignContent 1</p>',
  //   },
  //   board: 'ggggggggggggggg',
  //   style: {'alignContent': 'flex-end', 'flexWrap': 'wrap'},
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 5
  // },
  // {
  //   name: 'alignContent 2',
  //   instructions: {
  //     'en': '<p>alignContent 2</p>',
  //   },
  //   board: 'ggggggggggggggg',
  //   style: {'alignContent': 'space-around', 'flexWrap': 'wrap'},
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 5
  // },
  // {
  //   name: 'alignContent 3',
  //   instructions: {
  //     'en': '<p>alignContent 3</p>',
  //   },
  //   board: 'rrrgggyyy',
  //   style: {'alignContent': 'flex-start', 'flexWrap': 'wrap', 'flexDirection': 'column-reverse'},
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 5
  // },
  // {
  //   name: 'alignContent 4',
  //   instructions: {
  //     'en': '<p>alignContent 4</p>',
  //   },
  //   board: 'rrrgggyyy',
  //   style: {'alignContent': 'center', 'flexWrap': 'wrap', 'flexDirection': 'column-reverse'},
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 5
  // },
  // {
  //   name: 'alignContent 5',
  //   instructions: {
  //     'en': '<p>alignContent 5</p>',
  //   },
  //   board: 'rggggyy',
  //   style: { 'alignContent': 'space-between', 'flexWrap': 'wrap-reverse', 'flexDirection': 'columnReverse', 'justifyContent': 'center' },
  //   before: "pond: {",
  //   after: "}",
  //   fluid: 4
  // },
  {
    name: 'win',
    instructions: {
      'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. </p>'
    },
    board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
    style: { 'flexWrap': 'wrap' },
    defaultStyle: { 'flexWrap': 'wrap' },
    before: "✅😄👌",
    after: "☝️🚀🙌",
    fluid: 4,
    finish: true
  }
];

export default levels;
