import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal_container_custom"
    >
      <Modal.Header closeButton className="mymodal_header">
        <Modal.Title id="contained-modal-title-vcenter" bsPrefix="text-center">
          REFERENCE SHEET
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="bracket_expressions_container">
          <h3 className="title">Bracket Expressions</h3>
          <div className="row g-1">
            <div className="col-md-3 col-12 exp_container">
              <div className="expression">{'{ adf }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression odd">{'{ ^adf }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description odd">
                It is a long established fact that a reader will be distracted
                by the readable…
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression">{'{ a-f }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression odd">{'{ A-F }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description odd">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression">{'{ 0-9 }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable…
              </div>
            </div>
          </div>
        </div>
        <div className="bracket_expressions_container my-3">
          <h3 className="title">Quantifiers</h3>
          <div className="row g-1">
            <div className="col-md-3 col-12 exp_container">
              <div className="expression">{'{ adf }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression odd">{'{ ^adf }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description odd">
                It is a long established fact that a reader will be distracted
                by the readable…
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression">{'{ a-f }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
          <div className="row g-1">
            <div className="col-md-3 col-12">
              <div className="expression odd">{'{ A-F }'}</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="description odd">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

const MyModal = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <button
        className="reference-sheet btn"
        onClick={() => setModalShow(true)}
      >
        Reference Sheet
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default MyModal
