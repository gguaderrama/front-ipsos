export default Object.freeze({
  menu_presupuestos: [
    {
      id : 1,
      path: "/budgets",
      name: "Presupuestos",
      icon: "InboxIcon",
      component: "DashboardPage",
      layout: "/admin"
    },
    {
      id : 2,
      path: "/budgets",
      name:  "Compras",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin"
    },
    {
      id : 3,
      path: "/budgets",
      name:  "Compras",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin",
      submenu : [
        {
          id : 1,
          path: "/budgets",
          name:  "Compras",
          icon: "InboxIcon",
          component: "UserProfile",
          layout: "/admin"
        },
        {
          id : 2,
          path: "/budgets",
          name:  "Compras",
          icon: "InboxIcon",
          component: "UserProfile",
          layout: "/admin"
        },
      ]
    },
    {
      id : 4,
      path:  "/budgets",
      name: "Captura y Codificación",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin"
    },
    {
      id : 5,
      path: "/budgets",
      name: "Data processing",
      icon: "InboxIcon",
      component: "DashboardPage",
      layout: "/admin"
    },
    {
      id : 6,
      path:  "/budgets",
      name: "Auditoria",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin"
    },
    {
      id : 7,
      path: "/budgets",
      name: "Finanzas",
      icon: "InboxIcon",
      component: "DashboardPage",
      layout: "/admin"
    },
    {
      id : 8,
      path:  "/budgets",
      name: "Recursos Humanos",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin"
    },
    {
      id : 9,
      path: "/user",
      name: "Reportes",
      icon: "InboxIcon",
      component: "UserProfile",
      layout: "/admin"
    }
  ]
});
