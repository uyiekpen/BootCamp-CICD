import React from 'react'


const quote = [
  {
    proverbs: "Alone you can do so little, but together you can do much",
    author: "Osazie Uyiekpen"
  },
  {
    proverbs: "Alone you can do so little, but together you can do much",
    author: "Uyiekpen"
  },
  {
    proverbs: "Alone you can do so little, but together you can do much",
    author: "Osazie "
  }
]

function QuoteHolder() {
  const [counter, setcounter] = React.useState(1)

  return (
    <div>
      <center>
        Quote Holder
      <div>  {quote.length}</div>
        <hr />
      </center>
      <section

        onClick={() => {
          setcounter(counter + 1)
          console.log("i am click")
          console.log(counter)

        }}>
        <div style={{ cursor: "pointer" }}>
          <h3>{quote[counter % quote.length].proverbs}</h3>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end"
            }}
          > ...{quote[counter % quote.length].author}</p></div>
      </section>
    </div>
  )
}

export default QuoteHolder
