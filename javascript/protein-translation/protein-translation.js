//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaSequence = '') => {
  const proteinCodonMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  const polypeptide = [];
  for (let i = 0; i < rnaSequence.length; i += 3) {
    const codon = rnaSequence.slice(i, i + 3);
    const protein = proteinCodonMap[codon];

    if (protein === undefined) throw new Error('Invalid codon');
    if (protein === 'STOP') break;

    polypeptide.push(protein);
  }

  return polypeptide;
};
