"use client";

import { useState } from "react";

type Profile = { firstName: string; lastName: string; phone: string; address: string };
type Purchase = { slug: string; title: string; amountEuros: number; currency: string; date: string };

const CONTACT_EMAIL = "klar.formations@gmail.com";

export default function AccountTabs({
  email,
  profile,
  purchases,
}: {
  email: string;
  profile: Profile;
  purchases: Purchase[];
}) {
  const [tab, setTab] = useState<"infos" | "paiements" | "confidentialite">("infos");

  return (
    <div>
      <div className="account-tabs">
        <button className={tab === "infos" ? "active" : ""} onClick={() => setTab("infos")}>
          Informations personnelles
        </button>
        <button className={tab === "paiements" ? "active" : ""} onClick={() => setTab("paiements")}>
          Paiements &amp; factures
        </button>
        <button
          className={tab === "confidentialite" ? "active" : ""}
          onClick={() => setTab("confidentialite")}
        >
          Confidentialité
        </button>
      </div>

      {tab === "infos" && <InfosTab email={email} profile={profile} />}
      {tab === "paiements" && <PaiementsTab purchases={purchases} />}
      {tab === "confidentialite" && <ConfidentialiteTab />}
    </div>
  );
}

function InfosTab({ email, profile }: { email: string; profile: Profile }) {
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, address }),
    });
    setSaving(false);
    if (res.ok) setSaved(true);
  }

  return (
    <div className="account-panel">
      <div className="account-field">
        <label>Adresse e-mail</label>
        <input value={email} disabled />
      </div>
      <div className="account-field-row">
        <div className="account-field">
          <label>Prénom</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="account-field">
          <label>Nom</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div className="account-field">
        <label>Téléphone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="account-field">
        <label>Adresse postale</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
        {saving ? "Enregistrement..." : "Enregistrer"}
      </button>
      {saved && <p className="account-saved">Enregistré ✓</p>}
    </div>
  );
}

function PaiementsTab({ purchases }: { purchases: Purchase[] }) {
  if (purchases.length === 0) {
    return (
      <div className="account-panel">
        <p>Aucun achat pour le moment.</p>
      </div>
    );
  }

  const total = purchases.reduce((sum, p) => sum + p.amountEuros, 0);

  return (
    <div className="account-panel">
      <table className="account-invoices">
        <thead>
          <tr>
            <th>Formation</th>
            <th>Date</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((p) => (
            <tr key={p.slug}>
              <td>{p.title}</td>
              <td>{new Date(p.date).toLocaleDateString("fr-FR")}</td>
              <td>{p.amountEuros} €</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="account-total">Total : {total} €</p>
      <p style={{ fontSize: "0.85rem", color: "#5c5f7a" }}>
        Le reçu de paiement Stripe pour chaque achat t&apos;a été envoyé par e-mail au moment de la
        transaction.
      </p>
    </div>
  );
}

function ConfidentialiteTab() {
  return (
    <div className="account-panel">
      <h3>Tes données</h3>
      <p>
        Klar conserve uniquement ton adresse e-mail, les informations personnelles que tu choisis
        de renseigner ci-dessus, et l&apos;historique de tes achats — nécessaires pour te donner
        accès à tes formations. Consulte notre{" "}
        <a href="/confidentialite">politique de confidentialité</a> pour le détail.
      </p>
      <h3 style={{ marginTop: 20 }}>Tes droits</h3>
      <p>
        Conformément au RGPD, tu peux demander l&apos;accès, la rectification ou la suppression de
        tes données à tout moment.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          "Demande RGPD — suppression de mon compte Klar"
        )}`}
        className="btn btn-ghost"
        style={{ marginTop: 8 }}
      >
        Demander la suppression de mon compte
      </a>
    </div>
  );
}
