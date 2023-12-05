
        function calculateCompound() {
            document.getElementById("compound").style.display = "block";
            document.getElementById("simple").style.display = "none";
        }

        function calculateSimple() {
            document.getElementById("simple").style.display = "block";
            document.getElementById("compound").style.display = "none";
        }

        function calculateCompoundFormula() {
            var P = parseFloat(document.getElementById("p1").value);
            var i = parseFloat(document.getElementById("i1").value);
            var n = parseFloat(document.getElementById("n1").value);
            var S = P * Math.pow((1 + (i/100)), n);
            document.getElementById("compoundResult").innerHTML = "Результат: " + S;
        }

        function calculateSimpleFormula() {
            var P = parseFloat(document.getElementById("p2").value);
            var i = parseFloat(document.getElementById("i2").value);
            var n = parseFloat(document.getElementById("n2").value);
            var S = P * (1 + (i/100) * n);
            document.getElementById("simpleResult").innerHTML = "Результат: " + S;
        }
   