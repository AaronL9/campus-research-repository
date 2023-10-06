export const useConfirmation = () => {

  const confirmation = async (API, ) => {
    const response = await fetch(API, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${admin.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ approve: true }),
    });

    const json = await response.json();
  };

  return { confirmation };
};
