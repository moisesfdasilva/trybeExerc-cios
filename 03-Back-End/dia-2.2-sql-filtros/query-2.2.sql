SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT (10 + 20 + 30 - 15) * 2;
SELECT * FROM Scientists.Projects;
SELECT CONCAT(Name, Hours) AS 'Nome do Projeto', 'Tempo de Trabalho' FROM Scientists.Projects;

SELECT Name FROM Scientists.Scientists
ORDER BY Name;

SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.')
FROM Scientists.Projects;

SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

-- não rodou!
-- SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists.Scientists;