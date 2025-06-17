function RecebeReview(review?: {nota: NotasPossiveis, comentario: string}, temReview: boolean = true): void {
    if(temReview) {
        if(review){
            if(review.nota >= 1 && review.nota <= 5) {
                console.log(`Nota: ${review.nota}`);
                console.log(`Comentário: ${review.comentario}`);
            } else{
                console.log('Nota inválida. Deve ser entre 1 e 5.');
            }
        }
    } else {
        console.log('Você não deixou uma review');
    }
}

type NotasPossiveis = 1 | 2 | 3 | 4 | 5;

let review1: {nota: NotasPossiveis, comentario: string} = {nota: 5, comentario: 'Excelente produto!'};
RecebeReview(review1);

let review2: {nota: NotasPossiveis, comentario: string} = {nota: 3, comentario: 'Produto bom, mas poderia melhorar.'};
RecebeReview(review2);

let review3: {nota: NotasPossiveis, comentario: string} = {nota: 2, comentario: 'Não gostei do produto.'};
RecebeReview(review3);

RecebeReview(undefined, false);