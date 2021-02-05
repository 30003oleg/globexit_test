SELECT col.fullname, col.birth_date, learning.score FROM col
INNER JOIN learning ON col.id = learning.col_id
WHERE col.subdivision_name = 'бухгалтерия' AND learning.course_name = 'excel' AND learning.score > 80;

