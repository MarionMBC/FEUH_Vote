const btnLike = document.getElementById('like');
const btnUnlike = document.getElementById('unlike');
const btnAbs = document.getElementById('abstener');



var like = 0;
var unlike = 0;
var abs = 0;

sendName()
hideVote();
hideVoted();
hideResults ();

send.addEventListener('click', () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'ms-2 btn btn-primary',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro de tu pregunta?',
    text: "¡No podrás retractarte!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '¡Sí, enviar!',
    cancelButtonText: '¡No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          '¡Enviada!',
          'Tu pregunta ha sido enviada.',
          'success'
      )
      console.log ('Pregunta enviada')
      //Para los sig. consultar functions_Admin.js
      hideForm();
      showVote();
      showResults();
    } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
          'Cancelado',
          'Formula una nueva pregunta :)',
          'error'
      )
    }
  })
})



btnLike.addEventListener ("click", ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'ms-2 btn btn-primary',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de tu voto?',
        text: "¡No podrás retractarte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, votar!',
        cancelButtonText: '¡No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Registrado!',
            'Tu voto ha sido enviado.',
            'success'
          )
          //Para los sig. consultar functions_admin.js
          console.log ('Se votó a favor.')
          hideVote ()
          showVoted()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Realiza tu voto :)',
            'error'
          )
        }
      })
})


btnUnlike.addEventListener ("click", ()=> {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'ms-2 btn btn-primary',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de tu voto?',
        text: "¡No podrás retractarte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, votar!',
        cancelButtonText: '¡No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Registrado!',
            'Tu voto ha sido enviado.',
            'success'
          )
          console.log('Se votó en contra.')
          //Para los sig. consultar functions_admin.js
          hideVote()
          showVoted()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Realiza tu voto :)',
            'error'
          )
        }
      })
})

btnAbs.addEventListener ("click", ()=>{
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-2 btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de reservar tu voto?',
      text: "¡No podrás retractarte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, me abstengo!',
      cancelButtonText: '¡No, quiero votar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Voto abstenido!',
          'Has decidido no votar.',
          'success'
        )
        //Para los sig. consultar functions_Admin.js
        console.log ('Voto abstenido')
        hideVote()
        showVoted()
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Realiza tu voto :)',
          'error'
        )
      }
    })
})

document.getElementById('btnCloseVotation').addEventListener('click', () =>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'ms-2 btn btn-primary',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro de cerrar la votación?',
    text: "¡No podrás retractarte!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '¡Sí, cerrar!',
    cancelButtonText: '¡Cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          '¡Votación Cerrada!',
          'La votación se ha cerrado',
          'success'
      )
      console.log('Votación cerrada')
    } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
          'Cancelado',
          'La votación sigue :)',
          'error'
      )
    }
  })
})

