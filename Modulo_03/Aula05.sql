-- TEMA DA AULA: COMO UTILIZAR MAIS DE UMA TABELA NUMA INSTRUÇÃO DE CONSULTA
-- 1) EQUAÇÃO DE JUNÇÃO
-- EXEMPLO:
SELECT CLIENTE.COD_CLI, CLIENTE.NOME_CLI, PEDIDO.NUM_PED
    FROM CLIENTE, PEDIDO
    WHERE CLIENTE.COD_CLI = PEDIDO.CD_CLI;
    
-- EXERCÍCIO 06
SELECT CLIENTE.COD_CLI, CLIENTE.NOME_CLI, PEDIDO.NUM_PED
    FROM CLIENTE, PEDIDO
    WHERE (CLIENTE.COD_CLI = PEDIDO.CD_CLI) 
        AND (PEDIDO.PRAZO_ENTR > 15) 
        AND ((UPPER(CLIENTE.UF) = 'SP') OR (UPPER(CLIENTE.UF) = 'RJ'));
        -- AND (UPPER(CLIENTE.UF) IN ('SP','RJ')
        
-- EXEMPLO USANDO ALIAS: Nome de vendedores que ganham mais de 1000 reais com prazo de entrega superior a 15 e ordenado de forma ASC pelo nome.
SELECT DISTINCT V.NOME_VEND, P.PRAZO_ENTR
    FROM VENDEDOR V, PEDIDO P
    WHERE V.COD_VEND = P.CD_VEND
        AND V.SAL_FIXO > 1000
        AND P.PRAZO_ENTR > 15
    ORDER BY V.NOME_VEND;

-- EXERCÍCIO 07: Exiba a relação dos clientes localizados no RJ (ordenados alfabeticamente) que têm pedidos do 
-- produto Chapa de Aço 2.5, com prazos de entrega superiores a 15 dias. Ao final exiba um resultado que traga informação do nome e do pedido.
SELECT C.COD_CLI, C.NOME_CLI, C.UF, PRO.DESC_PROD, PED.NUM_PED
    FROM CLIENTE C, PEDIDO PED, PRODUTO PRO, ITEM_PEDIDO I
    WHERE C.COD_CLI = PED.CD_CLI       
        AND PED.NUM_PED = I.NO_PED
        AND PRO.COD_PROD = I.CD_PROD
        AND UPPER(C.UF) LIKE 'RJ'
        AND UPPER(PRO.DESC_PROD = 'CHAPA DE ACO 2.5')
        AND PED.PRAZO_ENTR > 15
    ORDER BY C.NOME_CLI;

-- EXEMPLO DE CONSULTAS ANINHADAS (SUB QUERIES)
SELECT DESC_PROD
    FROM PRODUTO
    WHERE COD_PROD IN (
                        SELECT CD_PROD
                            FROM ITEM_PEDIDO
                            WHERE QTD_PED = 100
                      );
                      
-- EXERCÍCIO 08: Quais vendedores ganham um salário fixo abaixo da média
SELECT COD_VEND, NOME_VEND
    FROM VENDEDOR
    WHERE SAL_FIXO < (
                        SELECT AVG(SAL_FIXO)
                            FROM VENDEDOR
                      );
