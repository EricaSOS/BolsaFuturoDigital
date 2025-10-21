-- EXEMPLO ATUALIZAR REGISTROS
UPDATE PRODUTO
    SET VAL_UNIT = 8.00, UNID_PROD = 'KG'
    WHERE DESC_PROD = 'CIMENTO' OR DESC_PROD = 'FIO PLASTICO';
    
-- EXERCÍCIO 09: Atualizar o salário fixo de todos os vendedores em 27% mais uma bonificação de R$ 100,00
UPDATE VENDEDOR
    SET SAL_FIXO = ((SAL_FIXO * 1.27) + 100)
    
