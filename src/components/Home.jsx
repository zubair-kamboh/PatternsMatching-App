import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './Home.css'
import Modal from './Modal'

const Home = () => {
  const [whiteBg, setWhiteBg] = useState('match')

  return (
    <main className="main">
      {/* <Modal /> */}
      <div className="container ">
        <div className="header">
          <div className="btns-container">
            <div className="left-btns">
              <Modal />
            </div>
            <div className="middle-btns">
              <h3 className="patterns-heading text-center">PATTERNS</h3>
              <div className="btns">
                <button
                  className="middle-btn btn"
                  id={whiteBg === 'match' ? 'white_bg' : ''}
                  onClick={() => setWhiteBg('match')}
                >
                  Match
                </button>
                <button
                  className="middle-btn btn"
                  onClick={() => setWhiteBg('replace')}
                  id={whiteBg === 'replace' ? 'white_bg' : ''}
                >
                  Replace
                </button>
                <button
                  className="middle-btn btn"
                  onClick={() => setWhiteBg('filter')}
                  id={whiteBg === 'filter' ? 'white_bg' : ''}
                >
                  Filter
                </button>
              </div>
            </div>

            <div className="right-btns">
              <select className="swift" name="swift">
                <option value="volvo">Swift</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>

              <button className="copy-code btn">Copy Code</button>
            </div>
          </div>
        </div>

        <div className="body py-4">
          <div className="regular-expression-container">
            <div className="heading">
              <h3 className="regular-expression-heading">Regular Expression</h3>
              <Form>
                <Form.Group controlId="ignore-case">
                  <Form.Check type="checkbox" label="Ignore Case" />
                </Form.Group>
                <Form.Group controlId="single-line">
                  <Form.Check type="checkbox" label="Single-line" />
                </Form.Group>
                <Form.Group controlId="multi-line">
                  <Form.Check type="checkbox" label="Multi-line" />
                </Form.Group>
                <Form.Group controlId="free-spacing">
                  <Form.Check type="checkbox" label="Free Spacing" />
                </Form.Group>
              </Form>

              <select className="swift" name="swift">
                <option value="volvo">Swift</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="html-container">
              &lt;!DOCTYPE html&gt; <br /> &lt;body&gt; <br />{' '}
              &lt;h2&gt;JavaScript Expressions&lt;/h2&gt; &lt;p&gt;Expressions
              compute to values.&lt;/p&gt; &lt;p id=“demo”&gt;&lt;/p&gt;
              &lt;script&gt; &lt;/script&gt;
              <br />
              document.getElementById(“demo”) <br /> .innerHTML = 5 *
              10&gt;&lt;/script&gt;
            </div>
          </div>

          <div className="search_text_container my-3">
            <div className="row g-2">
              <div className="col-md-7 col-12">
                <div className="heading">
                  <h3 className="search_text_heading">Search Text</h3>
                  <div className="matches_div">
                    <p>5 Matches</p>
                    <div className="btns">
                      <button>&lt;</button>
                      <button>&gt;</button>
                    </div>
                  </div>
                </div>

                <div className="body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industryʼs
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. <br /> <br /> &lt;!DOCTYPE html&gt; <br />{' '}
                  &lt;body&gt; <br /> &lt;h2&gt;JavaScript
                  Expressions&lt;/h2&gt; &lt;p&gt;Expressions compute to
                  values.&lt;/p&gt; &lt;p id=“demo”&gt;&lt;/p&gt; &lt;script&gt;
                  &lt;/script&gt;
                  <br />
                  document.getElementById(“demo”).innerHTML = 5 *
                  10&gt;&lt;/script&gt;
                </div>
              </div>

              <div className="col-md-5 col-12">
                <div className="heading matches">
                  <h3 className="search_text_heading">Matches</h3>
                </div>

                <div className="body">
                  <details>
                    <summary>Lorem Ipsum</summary>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industryʼs
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </details>
                  <details>
                    <summary>&lt;html&gt;</summary>
                  </details>
                  <details>
                    <summary>&lt;html&gt;</summary>
                    &lt;!DOCTYPE html&gt; <br /> &lt;body&gt; <br />{' '}
                    &lt;h2&gt;JavaScript Expressions&lt;/h2&gt;
                    &lt;p&gt;Expressions compute to values.&lt;/p&gt; &lt;p
                    id=“demo”&gt;&lt;/p&gt; &lt;script&gt; &lt;/script&gt;
                    <br />
                    document.getElementById(“demo”) <br />
                    .innerHTML = 5 * 10&gt;&lt;/script&gt;
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
