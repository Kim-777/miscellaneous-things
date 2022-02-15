// 스타일드 컴포넌트와 이모션과 같은 CSS in Js 문법을 활용한 라이브러리를 사용하기전, 어떻게 구동되는지 원리가 궁금했다.
// 구글에 서치하니까 너무 좋은 블로그 글이 있어 참고하여 작성한 글입니다.
// https://john015.netlify.app/styled-components%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C
//

const name = "김예찬";
const location = "부천";

const tag = (strs, firstExpr, secondExpr) =>
  console.log(strs, firstExpr, secondExpr);

tag`나는 ${location}에 살고 있는 ${name}이라고 합니다.`; // ['나는 ', '에 살고 있는 ', '이라고 합니다.'], '부천', '김예찬'

// Tagged Template Literals(이하 '테그드문법'이라고 칭하겠습니다!) 는 es6에 추가된 문법으로, 호출하게 되면 첫 번째 인자로, 모든 문자열을 배열에 담아 전달하고, 나머지 인자들에는 표현식들이 순서대로 전달됩니다.

const styled = (strs, ...exprs) => [strs, exprs];

const result = styled`
  background-color: ${({ primary }) => (primary ? "white" : primaryColor)};
  padding: 1rem;
`;
console.log(result);

// [
//   [ '\n  background-color: ', ';\n  padding: 1rem;\n' ],
//   [ [Function (anonymous)] ]
// ]

// 이제 부턴 styled-components를 구현해봅니다.
// React 환경을 가정하고 진행합니다.
const myStyled =
  (TargetComponent) =>
  ([style]) =>
  (props) => {
    const elementRef = useRef(null);

    useEffect(() => {
      elementRef.current?.setAttribute("style", style);
    }, [elementRef]);

    return <TargetComponent {...props} ref={elementRef} />;
  };

const Buttun = myStyled("button")`
  color: red;
  border: 2px solid red;
  border-radius: 3px;
`;

// myStyled 함수는 함수를 반환하는 고차 함수의 형태를 가지고 있습니다. 맨 처음 호출엔 html tag name을 넘겨주고, 다시 두 번째 호출할 땐, 스타일 값을 전달해주면 결과적으론 펑션 컴포넌트가 반환되는 구조입니다.
//  하지만 아직 styled-components의 styled.h1 방식으론 사용할 수 없으므로 살짝 수정이 필요합니다.

const domElements = ["button", "h1", "h2", "h3", "h4", "div", "p"];
domElements.forEach((domElement) => {
  myStyled[domElement] = myStyled(domElement);
});

// 위의 추가된 domElements가 모든 태그가 담고 있다면, 모든 myStyled 함수 프로퍼티에 mySyled를 호출한 결과가 담기게 됩니다. 즉 mySyled.h1을 통해  태그 h1이 선택된 함수를 참조할 수 있게 됩니다.
//  하지만 아직 props를 이용해서 동적으로 스타일링 하는 기능이 안되므로 수정해봅니다.

const myStyled2 =
  (TargetComponent) =>
  (strs, ...exprs) =>
  (props) => {
    const elementRef = useRef(null);

    useEffect(() => {
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === "function";
        const value = isFunc ? expr(props) : expr;
        return result + value + strs[index + 1];
      }, str[0]);

      elementRef.current.setAttribute("style", style);
    });

    return <TargetComponent {...props} ref={elementRef} />;
  };

domElements.forEach((domElement) => {
  myStyled2[domElement] = myStyled(domElement);
});

// 이후의 좀 더 자세한 styled-components의 동작원리를 블로그에서는 다루지만, 아직 이해가 되지는 않는 부분이라 다루지 않도록 하겠습니다~
// 혹시 이글을 보고 참고하고 싶다 하시는분은 상단의 블로그를 방문하시면 될거 같네요 :)
