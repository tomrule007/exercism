//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = rnaSequence => {
  if (!rnaSequence) return [];

  const validCodons = /[ACGU]{3}/gi;
  const codons = rnaSequence.match(validCodons);

  if (!codons || codons.length * 3 !== rnaSequence.length)
    throw new Error('Invalid codon');

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
  codons.every(codon => {
    const protein = proteinCodonMap[codon];
    if (protein === 'STOP') return false;

    polypeptide.push(protein);
    return true;
  });

  return polypeptide;
};
