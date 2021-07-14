import React from "react";
import { render, screen } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("o nome é exibido", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("o saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });
    it("o botão de realizar transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
    it("que é um saque, eu preciso de saldo na conta", () => {
      const valores = {
        transacao: "saque",
        valor: 150,
      };
      const saldo = 150;
      const novoSaldo = calcularNovoSaldo(valores, saldo);

      const novoSaldoEPositivo = (novoSaldo >= 0) ? true : false;

      expect(novoSaldoEPositivo).toBe(true);
    });
  });
});
