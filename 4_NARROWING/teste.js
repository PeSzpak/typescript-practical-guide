"use strict";
function RecebeReview(review, temReview = true) {
    if (temReview) {
        if (review) {
            if (review.nota >= 1 && review.nota <= 5) {
                console.log(`Nota: ${review.nota}`);
                console.log(`Comentário: ${review.comentario}`);
            }
            else {
                console.log('Nota inválida. Deve ser entre 1 e 5.');
            }
        }
    }
    else {
        console.log('Você não deixou uma review');
    }
}
let review1 = { nota: 5, comentario: 'Excelente produto!' };
RecebeReview(review1);
let review2 = { nota: 3, comentario: 'Produto bom, mas poderia melhorar.' };
RecebeReview(review2);
let review3 = { nota: 2, comentario: 'Não gostei do produto.' };
RecebeReview(review3);
RecebeReview(undefined, false);
