import '@sweetalert2/theme-dark'
import Swal from 'sweetalert2'

export default {
  showMessage(icon, title, text) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    })
  },
  async deleteTrade() {
    return new Promise((resolve) => {
      Swal.fire({
        title: 'Você tem certeza que deseja excluir essa troca?',
        text: 'Essa ação é irreversível',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#581c87',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.showMessage('success', '', 'Troca excluída com sucesso')
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  },
  async showAlertWhithConfirmation(title, text, icon, confirmButtonText, cancelButtonText) {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#581c87',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
      }).then((result) => {
        if (result.isConfirmed) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  },
  sameCardsError() {
    this.showMessage('error', 'Ocorreu um erro', 'Não é possível trocar pela mesma carta')
  },
  cardNotFound() {
    this.showMessage('error', 'Ocorreu um erro', 'Você não possui essa carta para troca')
  },
  addCard() {
    return this.showAlertWhithConfirmation(
      'Você tem certeza que deseja adicionar essa carta?',
      'Essa ação é irreversível',
      'warning',
      'Sim',
      'Cancelar'
    )
  }
}
