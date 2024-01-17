import React from "react";
import BoxWithCurve from "./BoxWithCurve";
import { Box } from "@mui/material";
const boxDate = [
  {
    imgOne: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR4nO2aSw6DMBBDfTxWvf86DedwFUFphRII/xnw29ERDg8HugGohGRD8s0fIf1We/7V+QN98JgAJ/kD3+TSsfV8fyIkXyRbzjBeaG9Qn5+u9ZUTaXdeaBVYlh9nqz2s+p3yWZo/SSRYev1yg0gzWuyIP8RQm79axBqUiLdGvIHbi8AJlIgx+PhGaOVh3trI7URgYJaQCNVIBzL0I22txKK78z8/G8xcj0RgYLZLIxZmCYlQjXQgw6Vb62wgkQJTd+js2eR89YkSgRpJaGvxInBUI+5FrEGJGINPaCTSH7H0CYcnmZj9hEPABh9/SM+9eNEVxgAAAABJRU5ErkJggg=="
      />
    ),
    imgTwo: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO1aQQ6DIBDc5/VS5mHQT7b6iiWhwURjjEZiNV1wJtmDEmcZB3Y5IFKI50sfLugHIaYczus7vyv9/t/8EzLxmGSeTCrhnzCSbz1b569PiAvqELRf2ruMZaKzQ4r5tc9zXvkj+yJsCYkJXrtday+z/iR+bI3fRogzVn5xVMjQsGbJLmmIvpz/sBBrAIXU5ggqC2leiFQCUIgx4PaOwMpm/tWR5oSIgbEMCgEdiVxaYNUKLL+J5TewjyR2drR0REErh0a0IkQMjGVQCOhI5NICq1a4Qfm1BlCIMaB9R7x2/9rQh8OvXBgYrnDUJMZrt3qFgxAb+AKGdtESVxwVAwAAAABJRU5ErkJggg=="
      ></img>
    ),
    keyWord: "SCHEDULE A CALL",
    desc: "It takes one free call to learn more about your personalized marketing plan. No obligation to sign up!",
    buttonValue: "Schedule Now",
  }, 
  {
    imgOne: (
        <img style={{
            width: "40px",
          }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO3WsSpHYRzH4V8JJZkM7kBmmxuQ2WR2BxYDqxuwuQPXwCqbCzCxuAGLojwGr5LkX+rwvvV9pnPezlvn955OfaoiIr6DZezV6HDu3VGNCgdtiEds1IiwhWe8YrdGhDU8tK9xUiPANpY+3c/jqg1xgbkf9v6ZmjHEDl5wjdW2dtr23n+sjTDIOu7as7c4bNdP2KwB/4ebLwewXyPCCi7bEGc1MizgGIv//S4RI5H67YjUbyekfqdTM04+9dsdqd9OSf1G/ErqtydSv52Q+p1OzTj51G93pH47JfUbEVHTeQMtNbuV/mhWWQAAAABJRU5ErkJggg==" />
    ),
    imgTwo: (
        <img style={{
            width: "40px",
          }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVR4nO3WMUoEQRCF4QJRQcTIwBuIsZkXcB2WrgHpwFjwACYGChsZaJfIisneQDyCpmLmAYw08QImwlRhyayzgaAGgtoN74MJpmFguqmGnwgA4DPx3OdrsS0qXUh6wWIexPapVEFst90Eiz7Xp75CJWJp1kLShpO+8oluUomqY19i0afxSCU9pBKw6Hp/4HOT952RT7PYzXikkl3FS5/6+tt27P7moe/USTdYVIPYbV98sV0LSc/eL7c+Ttay30g48uWQ9KEboXtOttdd7pdamlUq7z7Y3YcTSLZNJeoNfYHFrruRGlHJ4sBnQrKD3tBn//tfAEoSUb8ZCajfTFSoX0P9Muq3g/rNVUT9AvwI6jcnAfWbiQr1a6hfRv12UL+5iqhfAAD6PW/JIUtS8QUYDwAAAABJRU5ErkJggg==" />
    ),
    keyWord: "GET YOUR PLAN",
    desc: "Our experts will walk you through our services and help you choose the most valuable plan for your business.",
    buttonValue: "Get Plan",
  },
  {
    imgOne: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+UlEQVR4nO2aXYhVVRTHt03WlE7qYCajIBgoamqKICih2IwfwTw4iL5YMCI0NcUklCComT0oROCEGD1UJAh+FIIp6EulM2UvqZEaiTXhR4wxIzT4kVjzk6X/U3su9+Nc7z63c6H/07137/P/r3XOPmuvtfZ1rggAX1A+dLikQJnhknYkMQHhf0fiAujX3RrkEgIwSBr9LkGRixKZkaDGbGl0uQRF2iVyDKhOgL8GOCWNraH5faHHgcsSOgHMDcg9H/hB3L8Cw0Nx5xKcBJyP1jGwCxhTAt9YYLcXdX8BJoa1Orf4o8Am4IbEr+t77OUGDAbagD5x3NLSrUnW+tx3c6d3Ny0YvBDjunrgrHfd58D48lhdeH1/7xlmqcy0LPOelNERzgHPuTQBeBB4BeiVkbeB7cDTwFMWhYA/NfYH8DrwkEsruLfuC6HRpR3A+zEcaXEV5EhLMWOpA/fCsOFj4IGMkN2psSaXdgBT9aLnwhXgMVcJAJqAn7I40ZEtLKcawCylMLe081fGksoEcEDG2zvzkj6fTLKWCQ5tgv3a+Gpt41NGWxl7SARgv4x+2/vtVf32XUU8FWAK8DdwzeoX7/dq4JKcWezSDuBTGbsly9gajR13aQYw2Xsao7KM21P5Tc4869IKYI+MfCfPnDc0p7O81uUuqBYALwLvAgdVW/Srahyd59ohwO9y5mfgsCrDl4EGYFwiwUB9ptWqq09o2eSCObIhBqfdgL/y8NxUobYPaAaqQjgSLQUfPfbCAp8A64EVwMxi6m0lkdOBZcA64CMllZaLZeK9EI6YwUjMmme1JZMW1hymFKdF2r0hSD8T2TeJ95oyAKyNVoArFXr57KVE78g/m1ySAN6UpoXzVaFIRwOnRfxjKQ25mHqbpWUBoTk0+SivL9tlrZ2EIuQ2aVhxtjK0RiQ0AvhWQheACQG5q4APxW01zNJQ3PkiytcS7A5R8cmJqGNpRdjCMNYWFh7qHYz2lNru9FKbPmBeOEvjiT/iBYDlJXJFpfDCcBYWZ0DUYChpeanYMswPZ1188WqFR4suD5fIZamOoTWchfHFZ0j8TAAua2gbdoSxrjjx5yW+JwDXInEdDWNdceJ2TGDYWCCsrrQmBFCXZ15dsOSwWKiYytp00w7d6GUC6GzkA+CJHHwWxslXlCUCr0814ODSTqC8KIQSzkPenw1sr3jLNtaM677SeH05naiRYTej6g2YA3yZcZ7YFkU0C9HAXm+8V13Iuw1tnW4Z2v6LiGWZ8DPAEf6FVXiv5Trh1fyj3vxuObxR39vL6chI72g6wlVVkUNicjR4CaiP1uQ9GGjIEi0lK7asfriv6lFBwZ6Q/QnBUvjB92PQHdKv2n8TtgoQAAAAAElFTkSuQmCC"
      />
    ),
    imgTwo: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/0lEQVR4nO1aWWicVRS+dd/qhhu1ICgo7guCoEiKthrb/PfOBEdfVFDEXaKgQkGdqA/NzDl/mkhR+qCiINiqCC7QvtStLi9GxaUoasWqVDFCi2k7c0575dz//slkzGT7l86AH8xD5p+ce8/cs3znu6PUHGCANxlkm8dLA3+oskJeThj/ytyRzBbw+N+R2cIA7XMnYu0ClRWsXeBOBGhfZmtopG0uEbF2cWZrQP2yKNlpa1ZrKIM0HDnCH3SV7WFp29cVu1ADfxGtQQMqK5SG7YkG6bfo6HkkqNavSMu2AVqikb/yTvxsVttjVZYorLZna6Qf4jjWSC+vCO2p87VXHLCLNdArE2WXftIVe5bKAz1le4QB6tdAu/ziY/L3XMLtjrX2YI3cZ5B2+lOoSehKeKm84b5NpJfGuzHSNh3yLTP9n67SUg30bUMXf6t30J6u9jckvg3yl+PhAbwpqNYuaP5coWrPkE03hNH3JqTlqp3QVbYHBcD3aaBRv0kyQGtMtXZREWrnSRUyQHt8bu0wyA+VyvYQ1a7QLu5n4FFAgWp3GKRnZ8Fs71Kd4oieYrPTPWs7GKB+TzFeKJftAZNKNvJmeRYA9ap2hwlr57tEbxVWSH90D9ujVScgAOrVQN9NNfVNVZbbGnqwfqmnMNKxxzompJqhkd/0pba/gHy3Z82fZzrLpA1pgm4IA9pRCu3x0vgco+2UHhJDA7/hu/tT8XsG+X6fK591xKkEg7VzNdJeg/SPzC/x+8KMDdCvLldC6lbtDg38mg+hVVM8e9CTyk9UO0ODPSc+jSLYk5qfy6looN992F2t2hUaaZ3v6tDyM8AP+1zZrPY3igN2cQB0lQn5TgMUGuS33WwhfQNo1/KqPaXV/y4De6QG+tM7/KMG3uBEDeB7AqRlvWBPy6YYRDrT7W6uBh6RsJmGnovu9dhMJuUL0EDcmiHTbj+ovaqBby2ttwcm9qMhFBr50l+SsAboRQ38qEG+sadSu2Qu87aQyGJYu1ADXR8ArzRIz0u4CRf7L7WhpxM74jbs6AWvFPFMGpzKGKUBe4xQHKH73pHRxEYN8uueXnycudbUBIP8SBwBKikk+SQpY1GuscllCY1c9k7s1ci3pWJUqpAB/ton9JYkgtxsoIGe9CHFkuypGpcGN67LAm0VaUdlUSGBhmIVJgj5JpUFVqyyxxnkT70zvxTQnpmWbSmxBui5WHXUVSqmZbt1RQH+yIfZ9jQmPnFiQrGksUKVrklntzMtvMYeFV+MSkVJKnfG1MYg7SyE9S6VJ0qhPTwuAAXgG5LYikfhQl4n0YxYYEgaXjJs+VBdovKGp+Qs1aV72B6axJZQHd9071V5Q+4RfVx/k9SWCNq+Ej6Tzu7msjjwzT7Z1yW2hXStJ4jvq7zhrgki0e3x6cqqNDURIXTFLmppq2IXpUYO54pomGohukUdOoiZgE/kPRppbTBkT57KnhsNkO10Q1kmiHWq5otLuYEar0ITU+A78Y8NojtDekIa6yR7wO+5z1dpaX5OVOzCaGO0O57eDNYv18jvTrpPRO6LK5qUaAO8vsHBUVEhY0Hb3W6hq1x9+VcsoC2mUr9SI29sVNtNlR9odcMrn5ekbgi57bJ5yTUTndhwbo70oD1h4mp6fM7+W6ZIERdmY0OEhpiATh6jOd9eUgC6zoUS8IibH+Y5PUpRkBNyP0IAGpL79/ls6F9qeWZN2DPtIAAAAABJRU5ErkJggg=="
      ></img>
    ),
    keyWord: "WIN ONLINE",
    desc: "Win big against your competitors online with our all-in-one digital marketing solutions now!",
    buttonValue: "Start Winning",
  },
  {
    imgOne: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADM0lEQVR4nO2ZS2xMURjHzwyq1dDSiDTCgnqTSkjakFhIBOnOAiG1KJsiSCMRVhqJruqx8IpELKXUIzYoiUcitZB4pkEtpIg01COI90++9Ju4qXTmnLn3To+YfzKrOd9/fmfuved7XGPyyuvfElABrAYagf3AHmAHsBAYbHwWMAioAx6QXp3AAuOjgHLgZgD2BdAC7AUa9CNX5pF+/xk4AMwzvggoDQA+BmqARD9rk0Bznyt0AhiWe/K/4Y4r0G2gxGK9bGY6sAXo1tjTuaHtH2o88AP4DlRmET8B6NHNLImH0g5kvUK0hvDYmbrFzEAJOKMQa0N4TFOPp9HSuUG0K0R1yGP7C/BrwB564IluZGpIn/fqUxodnRtAhwJMCenzSX1GREfnBnBNAbLO1MAo9fgYLZ0bhCQz0coQHlXqcS9aOjcIKQRFTSE8tqrHoWjp3CAWK8SVEB7n1WNVtHRuEEsV4kM25TlQALxTj5p4KO1ArirEtv4KxQzxCWC7elyOh9Lt+K0M4VGpHg+jpXODOKkQdSE81qlHS7R0bhBrFOKZNE9ZxDdorKg2Hkr7OumU1klSZiQdYpOB0qRVvOKltYO6o0AzHGJmaUyH8UX09uOi3Q4xTRpz2PgiYI5CSbc32rK+eqMx841PAs4qmOSWsjTrhgMXdW2b8U3AWOBVpkZLehddIxl9ovFR9E5SMm1EJiiiTuOrgPsWG0n16F3GV/Gn9Z2ZYYQk6jY+ChgjXZ5CjkuzrkQT6FfZlPFJ9Ca3u7qJCxbrW1LJEJibG8o0kkwunR3wLTD7LbeIKwtM7WVSeQyYbXIpaaCAZdIV6i0i+qkzYOtxjuaToxqb0g1gOTAkzg0UAhsD1So6xjmS7uG28JVT7GDg+RI9BzYDRVFuIKEvcOSdR0pyW2wCRkb4OyXAhsCzJnqp/UoirHkxcC5g3J6LqTmwqM+LIyl/irM1GwpcV6PXwIrIiTMz1AZuOWEpyMZkXyoDA5NjIbU/2ruUpdk1eJK+vJETpSo2SnueamWRY77CJXCX/gOXjCcC2pSp0SXolgbVG08E1KcOHJegt/irHttNFOG/CkNc3Lzy+u/0G2OFKmFs1enpAAAAAElFTkSuQmCC"
      />
    ),
    imgTwo: (
      <img
        style={{
          width: "40px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJElEQVR4nO2ZTYgdRRCAe/3/QRMVERE9+K8xKCgYFBSE4Mrb6Z4NPBVDPEQRoqIigujlGYTs7quat9mDP0EQj7IajXhRoxAVJB4CUSPBv0PwBwm6RjHimyotqZmeTQLu+5n3sj3ifjC3qZqq6a6qrmpjlljiv0WUyMUWea1D2uiQZhxSyyE/GQHdcnNDjjNVpj4rx1rk9Q54j0OWhR6L9LWF9CZTRcZbcq5F/uiQwfS9A561SNMW+VF9dGUs0BeZM0B/WKRnHKY3mKrgpmV5YaBD+tIC1YzIyL+922jIMQ4oOWKFgF4ea8gpJjQO6SVv1K76pCzr9r46Y0GudE1+xALt97KvmZCMTcoFFogdEo0n7av7lV/Tkgsd0pw6EyU0akLhgO/3f3RreR30VLHFTCgs8OuZI8D3lNURT8sV3pFvTCgc8s58W6SrBknbDuhPB/R3sKB3QF+pI2Molw+o59dsZadl+fCs68+Avdm2mJLLBtKDdFD1jM7I6cOzri8D+P18f5ev1PVEzvQ16HcTCs00uSN8Z3kd6fVex6cmFHoQzLMWTQyg4zG/Is8N17q+jKBbfR15r6wOC/xmpqPJd5lQxEC3+b/5W5njeb0hJ1ikA76O1EwoLPAOXxAfX+ig2BGRkQj4CR8j75pQFOm3zDmrQGX9qn5uQuGQX8mbJV4/gI57/arOmlDYhO/2f3OfNk99y+cN1z7vyDoTtL0FflXPSXrM0F6jV1nfZOVHE+StqsuExgLvzg6PrfaKXmVc0l7pa9BeUxVcNinJttimnmWAJnzafd5UhRjTa70jc/UZObuX85UF+jlbxWZ6o6kSDnmbrwc74k1y1kLv2Sk5zSK/7WNju6katUTOc0A/dmu0tHfx860DcVMuMlXEIe/q5kg2QfGDOlNVLPJn3RyZ79GRvjVVxfnWdxzaV3UaIflstd9UkWiznKNdXh7Ecv5C7+kQTwuoRWqrU6ZKuLy4feKz1ltd3weeLYqhbaXXmdBErfYK7ewsUFrMfnWg3U1O03MxtfeTyhdds32NWUy0gYqA1mhXmJ2x8sD9K5sB9zHOyeoJ0Au5bDHQ5g9j4Nvv2yLHH00HToqAH5w/reYrcNAibekU3N3QLGaBnj0UX9mW+84iP1xP5OTheSAykl3g6J3H/Id4jwV+qDYhZwzrM/VJWWaRHyhizW+7H7RfKdV9Hs5qkFMd8BuH3WfsXIypeYS0+siLI96mtpRSNjojJ1rkD3wM/OSQ7zCLjANeV2w5tUWHFSWU0OaiAscolx4VS3uxI2mvVBt87CR9Cdem5BK9vNGMopNAE5goSVfltlCqN8Y9Czqkp31Qv2MqgkPe7jPlxp6FLPDHKhQjbzAVIUbeUCScnoUs0C+d7srDPjTXkxNahMIbyx0fLc4DLO4SS/zv+Ad9+z5A7eF4CwAAAABJRU5ErkJggg=="
      ></img>
    ),
    keyWord: "WORK WITH THE BEST",
    desc: "Get the best marketing experts in the industry to oversee your campaigns, while you focus on doing what you do best.",
    buttonValue: "Contact",
  },
];

const SetHomeBox = () => {
  return (
    <Box sx={{
        display: "flex",
        gap: "70px",
        flexWrap: "wrap",
        justifyContent: "center"
    }}>
      {
        boxDate.map((data, idx) => (
            <BoxWithCurve key={idx} imgOne={data.imgOne} imgTwo={data.imgTwo} keyWord={data.keyWord} desc={data.desc} buttonValue={data.buttonValue}/>
        ))
      }
    </Box>
  );
};

export default SetHomeBox;
