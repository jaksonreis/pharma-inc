export function dateFormatter(dobDate: Date) {
const dateFormatted = new Date(dobDate).toLocaleDateString("pt-BR", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    return dateFormatted
}